window.onload = function () {
    AutoFilling();
};

$(document).ready(function () {
    $("#back").click(function () {
        window.location.href = "View.html";
    });

    $("#formBtn").click(function () {
        submitForm();
    });
    //切换为手动输入SrcIp
    $("#VTEPSrcIP").change(function () {
       if ($(this).val()==='manual enter'){
           let html1 = '<label for="VTEPSrcIP">VTEPSrcIP</label>' +
               '<input type="text" class="form-control" id="VTEPSrcIP" placeholder="Enter Source IP" name="VtepSrcIp">';
           $("#SrcIpDiv").html(html1);
       }
    });
    //切换为手动输入DestIp
    $("#VTEPDestIP").change(function () {
       if ($(this).val() === 'manual enter') {
           let html1 = '<label for="VTEPDestIP">VTEPDestIP</label>' +
               '<input type="text" class="form-control" id="VTEPDestIP" placeholder="Enter Dest IP" name="VtepDestIp">';
           $("#DestIpDiv").html(html1);
       }
    });
});

//FUNCTION
//跳转页面时携带了参数，根据参数自动填充Tunnle Config FORM的一部分信息
function AutoFilling() {
    //let id = $.query.get("id");
    let Ip = $.query.get("ip");
    let Id = $.query.get('id');
    let otherIp = $.query.get('otherip');
    let array1 = otherIp.split('/');
    let otherId = $.query.get('otherid');
    let array2 = otherId.split('/');
    let VTEPSrcIP = '<option value='+Ip+'>'+'Device '+Id+' - '+ Ip +'</option>';
    let VTEPDestIP = "";
    for (let x=0;x<array1.length-1;x++){
        VTEPSrcIP += '<option value='+array1[x]+' >'+'Device '+array2[x]+' - '+ array1[x] +'</option>';
        VTEPDestIP += '<option value='+array1[x] +'>'+'Device '+array2[x]+' - '+ array1[x] +'</option>';
    }
    VTEPSrcIP += '<option style="font-weight: bold;color: gold">manual enter</option>';
    VTEPDestIP += '<option style="font-weight: bold;color: gold">manual enter</option>';
    $("#VTEPSrcIP").html(VTEPSrcIP);
    $("#VTEPDestIP").html(VTEPDestIP);
}
//提交参数，配置隧道
function submitForm() {
    //实例化FormData对象时传入Form表单
    let formObj =new FormData(document.getElementById('form'));
    //创建XMLHttpRequest对象
    let xmlObj = new XMLHttpRequest();
    //指定提交类型和发送地址
    xmlObj.open("POST","php/configTunnle.php");
    xmlObj.send(formObj);
    //获取后台返回的数据
    xmlObj.onload = function () {
        toastr.success(xmlObj.responseText);
    }
}