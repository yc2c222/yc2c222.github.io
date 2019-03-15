<?php
/**
 * Created by PhpStorm.
 * User: Razer Blade
 * Date: 2018/12/18
 * Time: 16:36
 */

$vni = $_GET['VNI'];
if (empty($vni)){
    die('VNI is empty !');
}
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "Vxlan";
$tablename = "TunnleInfo";

$conn = mysqli_connect($servername,$username,$password,$dbname);
// 检测连接
if (!$conn){
    die("连接失败: ".mysqli_connect_error());
}
mysqli_query($conn,"SET names utf8");

mysqli_query($conn,"DELETE FROM TunnleInfo WHERE VNI=$vni");

mysqli_close($conn);

echo "Tunnle delete success, VNI: " . $vni;