<?php
/**
 * Created by PhpStorm.
 * User: Razer Blade
 * Date: 2018/12/11
 * Time: 10:55
 * 数据库中文乱码问题： 操作数据库之前使用mysqli_query($conn,"SET names utf8");创建表格的时候在最后加上CHARACTER SET utf8 COLLATE utf8_general_ci
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

//创建数据库
//$sql = "CREATE DATABASE $dbname";
//if (mysqli_query($conn,$sql)){
//    echo "数据库创建成功".PHP_EOL;
//}else{
//    echo "数据库创建失败：".mysqli_error($conn).PHP_EOL;
//}

//创建数据表
//$sql = "CREATE TABLE $tablename(
//    Id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY ,
//    LocalDeviceIpList VARCHAR (128) NOT NULL ,
//    LocalWanList VARCHAR(128) NOT NULL ,
//    LocalLegalIp VARCHAR(128) NOT NULL
//) CHARACTER SET utf8 COLLATE utf8_general_ci";

//if (mysqli_query($conn,$sql)){
//    echo "数据表 $tablename 创建成功 !".PHP_EOL;
//}else{
//    echo "创建数据表错误： ".mysqli_error($conn);
//}

//添加记录
$stmt = $conn->prepare("INSERT INTO $tablename(LocalDeviceIpList,LocalWanList,LocalLegalIp) VALUES (?,?,?)");
$stmt->bind_param("sss",$deviceip,$wan,$legalip);

for ($i=5;$i<7;$i++){
    $deviceip = "$i.$i.$i.$i";
    $wan = "WAN$i";
    $legalip = "$i.$i.$i.100";
    $stmt->execute();
}


$deviceip = "4.4.4.4";
$wan = "WAN1";
$legalip = "4.4.4.10";
$stmt->execute();


echo "新记录插入成功 !";

$stmt->close();
mysqli_close($conn);