/*------------------------------------------------------onload--------------------------------------------------------*/
window.onload = function(){
    RefreshInfo("php/getInfo.php?tablename=DeviceInfo",$(".list-group"));
    RefreshInfo("php/getInfo.php?tablename=TunnleInfo",$("tbody"));
    //在image淡出后，执行canvas函数，绘制拓扑
    $("#image").fadeOut(2000,function () {
        canvas();
    });
};
/*-------------------------------------------------------ready--------------------------------------------------------*/
$(document).ready(function(){
    //点击按钮以显示或隐藏设备信息表格
    $("#tableHide").click(function(){
        if ($("#table").css('visibility')==='visible') {
            $("#table").css('visibility','hidden');
            $("#tableHide").html('<i class="fas fa-toggle-off"></i> Table OFF');
        }else{
            RefreshInfo("php/getInfo.php?tablename=TunnleInfo",$("tbody"));
            $("#table").css('visibility','visible');
            $("#tableHide").html('<i class="fas fa-toggle-on"></i>'+' Table ON');
        }
    });

    //更新deviceInfo列表
    $("#RefreshDevInfo").click(function () {
       // RefreshDevInfo();
        RefreshInfo("php/getInfo.php?tablename=DeviceInfo",$(".list-group"));
    });
});

/* ----------------------------------------------------FUNCTION-------------------------------------------------------*/

//用于刷新各种信息的函数
// function RefreshDevInfo() {
//     if (window.XMLHttpRequest){
//         var xmlhttp = new XMLHttpRequest();
//     }else{
//         xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
//     }
//
//     xmlhttp.onreadystatechange = function () {
//         if (xmlhttp.readyState==4 && xmlhttp.status==200){
//             $("#deviceinfo").html(xmlhttp.responseText);
//         }
//     };
//
//     xmlhttp.open("GET","php/getDevice.php",true);
//     xmlhttp.send();
// }
function RefreshInfo(url,obj,firstRefresh) {
    if (window.XMLHttpRequest){
          var xmlhttp = new XMLHttpRequest();
    }else{
         xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState==4 && xmlhttp.status==200){
            obj.html(xmlhttp.responseText);
            if (firstRefresh){
                RefreshInfo("php/getInfo.php?tablename=TunnleInfo",$("tbody"),false);
            }

        }
    };
    xmlhttp.open("GET",url,true);
    xmlhttp.send();
}

//用于携带参数跳转到设备信息查看的页面 函数getDevice.php -> view-script responseText -> view.html
function GetDevInfo(x) {
    let id = $(x).attr('id');
    let value = $(x).attr('value');
    window.location.href = "DeviceInfo.html?id="+id+"&value="+value;
}
//携带参数跳转到隧道配置的页面，跳转完成后自动填充好已知的数据
function ConfigTun(x) {
    let id = $(x).attr('id');
    let ip = $(x).attr('value');
    let element = $(".dpm");

    let url = 'Configtunnel.html?ip='+ip+'&id='+id+'&otherip=';//在跳转的url中携带参数
    for (let i=0;i<element.length;i++){
        let value = element.eq(i).children().first().attr('value');
        if (value !== ip && (typeof value)=='string'){
            url += value+'/';
        }
    }
    url += '&otherid=';
    for (let i=0;i<element.length;i++){
        let value = element.eq(i).children().first().attr('id');
        if (value !== id && (typeof value)=='string'){
            url += value+'/';
        }
    }
    //window.location.href = 'Configtunnel.html?id='+id+"&value="+value;
    window.location.href = url;
}
//携带参数跳转到业务绑定页面
function BindingService(x) {
    let vni = $(x).attr('id');
    window.location.href = "BindingService.html?vni="+vni;
}
//拆除隧道
function DeleteTunnle(x) {
    $.confirm({
        theme:'dark',
        icon:'fas fa-exclamation-triangle',
        title: 'Alert!',
        content: 'Delete the tunnle ?',
        type: 'orange',
        typeAnimated: true,
        animateFromElement: false,
        animation:'RotateY',
        buttons: {
            Delete:{
                btnClass:'btn-dark',
                action:function () {
                    let VNI = $(x).attr('id');
                    if (window.XMLHttpRequest){
                        xmlhttp = new XMLHttpRequest();
                    }else{
                        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
                    }
                    xmlhttp.onreadystatechange = function () {
                        if (xmlhttp.readyState==4 && xmlhttp.status==200){
                            $.alert({theme: 'dark',icon: 'far fa-check-circle',title:'OK !',content: xmlhttp.responseText,type: 'green',typeAnimated: true,
                                animateFromElement: false,animation: 'RotateX'});

                            RefreshInfo("php/getInfo.php?tablename=TunnleInfo",$("tbody"));
                            for (let i=0;i<links.length;i++){
                                if (links[i].text.indexOf(VNI) != -1){
                                    scene.remove(links[i]);
                                    break;
                                }
                            } 
                            //location.reload(true);
                        }
                    };
                    xmlhttp.open("GET","php/deleteTunnle.php?VNI="+VNI,true);
                    xmlhttp.send();
                }
            },
            Cancle:{
                btnClass:'btn-default',
                action:function () {
                    return;
                }
            }
        }
    });

}
/*-------------------------------------------------------Canvas-------------------------------------------------------*/
function canvas() {
    //canvas basic set
    $("#canvas").css('visibility','visible');
    let width = $("#topology").css('width');
    let height = $("#topology").css('height');
    $("#canvas").attr({'width':width,'height':height});
    let canvas = $("#canvas").get(0);
    let stage = new JTopo.Stage(canvas);
    stage.frames = 100;
    stage.wheelZoom = 1.2;
    scene = new JTopo.Scene(stage);

    let elementDev = $(".dpm");
    let elementTun = $(".tableitem");

    let nodes = [];                 //存放node对象
    let nodesIP = [];               //存放node对应的ip
    links = [];                 //存放link对象
    let linksnodes = [];            //存放所有非空闲的node对象
    //draw node
    let r = 250;                    //中心圆的半径
    let n = elementDev.length;      //中心圆的节点数
    let p = 720;                    //中心圆的坐标
    let q = 280;
    for(let i=0;i<n;i++){
        let x = p+r*Math.cos(2*Math.PI*(i-1)/n);
        let y = q+r*Math.sin(2*Math.PI*(i-1)/n);
        let ip = elementDev.eq(i).children().first().attr('value');
        let txt = $(".dpt").eq(i).text();
        let  node = new JTopo.Node(txt);
        node.fontColor = '48,48,48';
        node.font =  '15px Consolas';
        node.fillColor = '0,155,239';
        node.setLocation(x,y);
        node.shadow = true;
        scene.add(node);
        mousehover(node,'IP: '+ip);
        nodes.push(node);
        nodesIP.push(ip);
    }
    //controller node
    var centerNode = new JTopo.CircleNode('ODL');
    centerNode.setLocation(720,280);
    centerNode.shadow = true;
    centerNode.fillColor = '40,167,69';
    centerNode.font = '20px Consolas';
    centerNode.textPosition = 'Middle_Center';
    centerNode.fontColor = '255,255,255';
    scene.add(centerNode);

    //controller 与node的linki
    for (let i=0;i<nodes.length;i++) {
        let linkx = new newLink(centerNode,nodes[i],'openflow'+(i+1),'',null);
        scene.add(linkx);
    }
    //draw link
    for (let i = 0;i<elementTun.length;i++){
        let linkitem = $(".tableitem").eq(i).children();
        let index1 = nodesIP.indexOf(linkitem.eq(1).text());
        let index2 = nodesIP.indexOf(linkitem.eq(2).text());
        let linkindex = linkitem.eq(0).text();
        if (linksnodes.indexOf(nodes[index1])>-1 && linksnodes.indexOf(nodes[index2])>-1) {  //双向线段时防止错乱
            if (linksnodes.indexOf(nodes[index1])<linksnodes.indexOf(nodes[index2])) {
                var link = new newLink(nodes[index1],nodes[index2],'VNI: '+linkindex,'',10);
            }else {
                var link = new newLink(nodes[index2],nodes[index1],'VNI: '+linkindex,'',10);
            }
        }else {
            var link = new newLink(nodes[index1],nodes[index2],'VNI: '+linkindex,'',10);
        }
        links.push(link);
        linksnodes.push(nodes[index1]);
        linksnodes.push(nodes[index2]);
    }

    //normal node
    function newNode(x,y,text) {
        var node = new JTopo.Node(text);
        node.setLocation(x,y);
        node.fillColor = JTopo.util.randomColor();
        node.fontColor = '0,0,0';
        node.setSize(50,50);
        scene.add(node);
        return node;
    }
    //circleNode
    function newCircleNode(x,y,text) {
        var circleNODE = new JTopo.CircleNode(text);
        circleNODE.radius = 40;//半径
        circleNODE.alpha = 0.99;
        circleNODE.fillColor = JTopo.util.randomColor();
        circleNODE.borderWidth = 0;
        circleNODE.setCenterLocation(x,y);
        circleNODE.setSize(50,50);
        circleNODE.textPosition = "Middle_Bottom";
        scene.add(circleNODE);
        return circleNODE;
    }
    //simple link
    function newLink(node1,node2,text,color,dashedPattern) {
        var link = new JTopo.Link(node1,node2,text);
        link.lineWidth = 1;
        link.dashedPattern = dashedPattern;//虚线
        link.bundleOffset = 60;//折线拐角处长度
        link.bundleGap = 20;//线条间间隔 为0时两条线合并为一条，加上每条的箭头，呈现出双向箭头
        link.textOffsetY = 0;//文本向下偏移3个像素
        link.textOffsetX = 25;
        link.strokeColor = color||'48,48,48'||JTopo.util.randomColor();
        link.fontColor = '0,0,0';
        link.font = '10px 微软雅黑';
        scene.add(link);
        return link;
    }

    //curve link
    function newCurveLink(node1,node2,text,color,dashedPattern) {
        var link = new JTopo.CurveLink(node1,node2,text);
        link.lineWidth = 3;
        link.bundleGap = 0;
        link.dashedPattern = dashedPattern;
        link.strokeColor = color||'48,48,48'||JTopo.util.randomColor();
        link.fontColor = '0,0,0';
        link.font = '10px 微软雅黑';
        link.direction = 'horizontal';
        scene.add(link);
        return link;
    }
    /*-----------------------------------------------JTopo promote----------------------------------------------------*/
    //device node tips function
    function mousehover(x,text){
        x.addEventListener('mouseover',function () {
            x.alarm = text || '255.255.255.255';
            x.alarmFont = '16px Consolas';
            x.alarmColor = '92,220,233';

            x.alarmAlpha =0.05;
            var interval = setInterval(function () {
                x.alarmAlpha += 0.03;
                if (x.alarmAlpha >= 0.6)
                    clearInterval(interval);
            },50);
        });
        x.addEventListener('mouseout',function () {
            this.alarm = null;
        });
        x.addEventListener('mousedown',function () {
            this.alarm = null;
        })
    }

}


