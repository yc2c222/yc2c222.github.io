window.onload = function () {
    getTable();
};

$(document).ready(function () {
   $("#back").click(function () {
      window.location.href = "View.html";
   });
});

function getTable() {
    let id = $.query.get("id");
    let value = $.query.get("value");

    if (window.XMLHttpRequest){
        xmlhttp = new XMLHttpRequest();
    }else{
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState==4 && xmlhttp.status==200){
            $("#tbody").html(xmlhttp.responseText);
        }
    };

    xmlhttp.open("GET","php/DeviceInfo.php?id="+id,true);
    xmlhttp.send();
}