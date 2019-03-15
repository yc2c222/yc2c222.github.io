$(document).ready(function () {
    let vni = $.query.get('vni');
    AutoFilling();
    RefreshTable("php/getInfo.php?tablename=ServiceInfo&vni="+vni,$("tbody"));
    $("#back").click(function () {
        window.location.href = "View.html";
    });

    $("#formBtn").click(function () {
        submitForm();
    });

    //切换为手动输入SrcIp
    $("#DataSrcIP").change(function () {
        if ($(this).val()==='manual enter'){
            let html1 = '<label for="DataSrcIP">VTEPSrcIP</label>' +
                '<input type="text" class="form-control" id="DataSrcIP" placeholder="Enter Source IP" name="DataSrcIP">';
            $("#srcipDiv").html(html1);
        }
    });
    $("#DataDestIP").change(function () {
        if ($(this).val()==='manual enter'){
            let html2 = '<label for="DataSrcIP">VTEPSrcIP</label>' +
                '<input type="text" class="form-control" id="DataDestIP" placeholder="Enter Dest IP" name="DataDestIP">';
            $("#destipDiv").html(html2);
        }
    });

});

function AutoFilling() {
    let vni = $.query.get('vni');
    $("#vni").val(vni);
    let html = '<option>--------</option>'+
        '<option style="font-weight: bold;color: gold">manual enter</option>';
    $("#DataSrcIP").html(html);
    $("#DataDestIP").html(html);
}

//提交参数，绑定业务
function submitForm() {
    let vni = $.query.get('vni');
    //实例化FormData对象时传入Form表单
    let formObj =new FormData(document.getElementById('Serviceform'));
    //创建XMLHttpRequest对象
    let xmlObj = new XMLHttpRequest();
    //指定提交类型和发送地址
    xmlObj.open("POST","php/ServiceInfo.php");
    xmlObj.send(formObj);
    //获取后台返回的数据
    xmlObj.onload = function () {
        toastr.success(xmlObj.responseText);
        RefreshTable("php/getInfo.php?tablename=ServiceInfo&vni="+vni,$("tbody"));
    }
}

function RefreshTable(url,obj) {
    if (window.XMLHttpRequest){
        var xmlhttp = new XMLHttpRequest();
    }else{
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState==4 && xmlhttp.status==200){
            obj.html(xmlhttp.responseText);
        }
    };
    xmlhttp.open("GET",url,true);
    xmlhttp.send();
}

function DeleteService() {
    alert('wait next version.....');
}