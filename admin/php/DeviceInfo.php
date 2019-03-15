<?php
/**
 * Created by PhpStorm.
 * User: Razer Blade
 * Date: 2018/12/13
 * Time: 12:50
 */

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "Vxlan";
$tablename = "DeviceInfo";
//获取deviceinfo.js传递来的参数，以便根据这些参数从数据库中返回相应的数据
$id = $_GET['id'];
if (empty($id)){
    die('the id is empty');
}


$conn = mysqli_connect($servername,$username,$password,$dbname);
if (!$conn){
    die("连接失败: ".mysqli_connect_error());
}
mysqli_query($conn,"SET names utf8");

$sql = "SELECT * FROM $tablename WHERE Id='$id'";

$result = mysqli_query($conn,$sql);

while ($row=mysqli_fetch_assoc($result)){
    echo "<tr>";
    echo "<td>Device " . $row['Id'] . "</td>";
    echo "<td>" . $row['LocalDeviceIpList'] . "</td>";
    echo "<td>" . $row['LocalWanList'] . "</td>";
    echo "<td>" . $row['LocalLegalIp'] . "</td>";
    echo "</tr>";
}

mysqli_close($conn);


