<?php
/**
 * Created by PhpStorm.
 * User: Razer Blade
 * Date: 2018/12/17
 * Time: 16:50
 */

$VtepSrcIp = $_POST['VtepSrcIp'];
$VtepSrcPort = $_POST['VtepSrcPort'];
$VtepDestIp = $_POST['VtepDestIp'];
$VtepDestPort = $_POST['VtepDestPort'];
$SrcDeviceWan = $_POST['SrcDeviceWan'];
$DestDeviceWan = $_POST['DestDeviceWan'];
//echo $VtepSrcIp."<br>"."$VtepSrcPort"."<br>".$VtepDestIp."<br>".$VtepDestPort."<br>".$SrcDeviceWan."<br>".$DestDeviceWan;



$servername = "localhost";
$username = "root";
$password = "";
$dbname = "Vxlan";
$tablename = "TunnleInfo";

$conn = mysqli_connect($servername,$username,$password,$dbname);
if (!$conn){
    die("连接失败: ".mysqli_connect_error());
}
mysqli_query($conn,"SET names utf8");

//创建数据库
//$sql = "CREATE DATABASE $dbname";
//if (mysqli_query($conn,$sql)){
//    echo "数据库创建成功".PHP_EOL;
//}else{
//    echo "数据库创建失败：".mysqli_error($conn).PHP_EOL;
//}

//创建数据表
//$sql = "CREATE TABLE $tablename(
//    VNI INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY ,
//    VTEPSrcIP VARCHAR (32) NOT NULL ,
//    VTEPSrcPort VARCHAR(32) NOT NULL ,
//    VTEPDestIP VARCHAR(32) NOT NULL ,
//    VTEPDestPort VARCHAR(32) NOT NULL ,
//    SrcDeviceWAN VARCHAR(32) NOT NULL ,
//    DestDeviceWAN VARCHAR(32) NOT NULL
//) CHARACTER SET utf8 COLLATE utf8_general_ci";
//
//if (mysqli_query($conn,$sql)){
//    echo "数据表 $tablename 创建成功 !".PHP_EOL;
//}else{
//    echo "创建数据表错误： ".mysqli_error($conn);
//}

//添加记录 -> DB
$stmt = $conn->prepare("INSERT INTO $tablename(
                          VTEPSrcIP,VTEPSrcPort,VTEPDestIP,VTEPDestPort,SrcDeviceWAN,DestDeviceWAN)
                           VALUES (?,?,?,?,?,?)");
$stmt->bind_param("ssssss",$srcip,$srcport,$destip,$destport,$srcwan,$destwan);

$srcip = $VtepSrcIp;
$srcport = $VtepSrcPort;
$destip = $VtepDestIp;
$destport = $VtepDestPort;
$srcwan = $SrcDeviceWan;
$destwan = $DestDeviceWan;
$stmt->execute();
$stmt->close();

$result = mysqli_query($conn,"select * from $tablename where VTEPSrcIP='$VtepSrcIp' and VTEPDestIP='$VtepDestIp'");
if (mysqli_num_rows($result) > 0){
    while ($row = mysqli_fetch_assoc($result)){
        echo 'Config Complete, VNI : '.$row['VNI'];
    }
}

mysqli_close($conn);
