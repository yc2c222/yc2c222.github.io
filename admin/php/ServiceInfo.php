<?php
/**
 * Created by PhpStorm.
 * User: Razer Blade
 * Date: 2018/12/11
 * Time: 10:55
 * 数据库中文乱码问题： 操作数据库之前使用mysqli_query($conn,"SET names utf8");创建表格的时候在最后加上CHARACTER SET utf8 COLLATE utf8_general_ci
 */
//获取前台post的数据
$Vni = $_POST['Vni'];
$DataSrcIP = $_POST['DataSrcIP'];
$DataDestIP = $_POST['DataDestIP'];
$EncryptLevel = $_POST['EncryptLevel'];
$FlowInPort = isset($_POST['FlowInPort']) ? $_POST['FlowInPort'] : 'Default';
$FlowOutPort = isset($_POST['FlowOutPort']) ? $_POST['FlowOutPort'] : 'Default';

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "Vxlan";
$tablename = "ServiceInfo";

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
//    VNI INT(6) UNSIGNED NOT NULL ,
//    DataSourceIP VARCHAR (64) NOT NULL ,
//    DataDestIP VARCHAR(64) NOT NULL ,
//    FlowInPort VARCHAR(64) NOT NULL,
//    FlowOutPort VARCHAR(64) NOT NULL,
//    Encrypt VARCHAR(10)
//) CHARACTER SET utf8 COLLATE utf8_general_ci";
//if (mysqli_query($conn,$sql)){
//    echo "数据表 $tablename 创建成功 !".PHP_EOL;
//}else{
//    echo "创建数据表错误： ".mysqli_error($conn);
//}

//添加记录
$stmt = $conn->prepare("INSERT INTO $tablename(VNI,DataSourceIP,DataDestIP,FlowInPort,FlowOutPort,Encrypt) VALUES (?,?,?,?,?,?)");
$stmt->bind_param("isssss",$vni,$srcip,$destip,$inport,$outport,$encrypt);
$vni = $Vni;
$srcip = $DataSrcIP;
$destip = $DataDestIP;
$inport = $FlowInPort;
$outport = $FlowOutPort;
$encrypt = $EncryptLevel;
$stmt->execute();

echo 'Service Binding Success !';

$stmt->close();
mysqli_close($conn);