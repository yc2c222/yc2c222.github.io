<?php
/**
 * Created by PhpStorm.
 * User: Razer Blade
 * Date: 2018/12/12
 * Time: 16:03
 *
 * 用于更新view.html中idel device列表
 * 此php文件功能已加入到getInfo.php文件中，暂时 不需要
 */
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "Vxlan";
$tablename = "DeviceInfo";

$conn = mysqli_connect($servername,$username,$password,$dbname);
if (!$conn){
    die("连接失败: ".mysqli_connect_error());
}
mysqli_query($conn,"SET names utf8");

$sql = "SELECT * FROM $tablename";

$result = mysqli_query($conn,$sql);

while ($row=mysqli_fetch_assoc($result)){
    $id1 = $row['Id'];
    $id2 = $row['Id'];
    $value = $row['LocalDeviceIpList'];
    echo "<div class='btn-group'>";
    echo "<button type='button' class='btn  dropdown-toggle' data-toggle='dropdown'>Device " . $row['Id'] ."</button>";
    echo "<div class='dropdown-menu'>";
    echo "<button class='btn dropdown-item' id=$id1 value=$value onclick='GetDevInfo(this)'>设备信息</button>";
    echo "<button class='btn dropdown-item' id=$id2 value=$value onclick='ConfigTun(this)'>配置隧道</button>";
    echo "</div>";
    echo "</div>";
}

mysqli_close($conn);