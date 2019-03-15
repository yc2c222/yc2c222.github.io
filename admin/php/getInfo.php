<?php
/**
 * Created by PhpStorm.
 * User: Razer Blade
 * Date: 2018/12/18
 * Time: 9:49
 */

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "Vxlan";

$tablename = ($_GET['tablename']);
$Vni = isset($_GET['vni']) ? $_GET['vni'] : '';
if (empty($tablename)){
    die('tablename is empty !');
}

switch ($tablename){
    case "DeviceInfo":
        DeviceInfo();
        break;
    case "TunnleInfo":
        TunnleInfo();
        break;
    case "ServiceInfo":
        ServiceInfo();
        break;
    default:
        echo "no this table !";
}

function DeviceInfo (){
    global $servername,$username,$password,$dbname,$tablename;
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
        echo "<div class='btn-group bg'>";
        echo "<button type='button' class='btn  dropdown-toggle dpt' data-toggle='dropdown'>Device " . $row['Id'] ."</button>";
        echo "<div class='dropdown-menu dpm'>";
        echo "<button class='btn dropdown-item dpi' id=$id1 value=$value onclick='GetDevInfo(this)'>Device Info</button>";
        echo "<button class='btn dropdown-item dpi' id=$id2 value=$value onclick='ConfigTun(this)'>Tunnle Config</button>";
        echo "</div>";
        echo "</div>";
    }

    mysqli_close($conn);
}

function TunnleInfo (){
    global $servername,$username,$password,$dbname,$tablename;
    $conn = mysqli_connect($servername,$username,$password,$dbname);
    if (!$conn){
        die("连接失败: ".mysqli_connect_error());
    }
    mysqli_query($conn,"SET names utf8");

    $sql = "SELECT * FROM $tablename";

    $result = mysqli_query($conn,$sql);

    while ($row=mysqli_fetch_assoc($result)){
        $VNI = $row['VNI'];
        echo "<tr class='tableitem'>";
        echo "<td>".$row['VNI']."</td>";
        echo "<td>".$row['VTEPSrcIP']."</td>";
        echo "<td>".$row['VTEPDestIP']."</td>";
        echo "<td>".$row['VTEPSrcPort']."</td>";
        echo "<td>".$row['VTEPDestPort']."</td>";
        echo "<td>".$row['SrcDeviceWAN']."</td>";
        echo "<td>".$row['DestDeviceWAN']."</td>";
        echo "<td>";
        echo "<div class='btn-group'>";
        echo "<button type='button' class='btn  dropdown-toggle dpt2' data-toggle='dropdown'>operation</button>";
        echo "<div class='dropdown-menu dpm2'>";
        echo "<button class='btn dropdown-item dpi2'  id=$VNI onclick='BindingService(this)'>Binding Service</button>";
        echo "<button class='btn dropdown-item dpi2'  id=$VNI onclick='DeleteTunnle(this)'>Delete Tunnle</button>";
        echo "</div>";
        echo "</div>";
        echo "</td>";
        echo "</tr>";
    }

    mysqli_close($conn);
}

function ServiceInfo(){
    global $servername,$username,$password,$dbname,$tablename,$Vni;
    $conn = mysqli_connect($servername,$username,$password,$dbname);
    if (!$conn){
        die("连接失败: ".mysqli_connect_error());
    }
    mysqli_query($conn,"SET names utf8");

    $sql = "SELECT * FROM $tablename WHERE VNI=$Vni";

    $result = mysqli_query($conn,$sql);

    while ($row=mysqli_fetch_assoc($result)){
        echo "<tr class='tableitem'>";
        echo "<td>".$row['VNI']."</td>";
        echo "<td>".$row['DataSourceIP']."</td>";
        echo "<td>".$row['DataDestIP']."</td>";
        echo "<td>".$row['FlowInPort']."</td>";
        echo "<td>".$row['FlowOutPort']."</td>";
        echo "<td>".$row['Encrypt']."</td>";
        echo "<td>";
        echo "<div class='btn-group'>";
        echo "<button type='button' class='btn  dropdown-toggle dpt3' data-toggle='dropdown'>operation</button>";
        echo "<div class='dropdown-menu dpm3'>";
        echo "<button class='btn dropdown-item dpi3'  id=$Vni onclick='DeleteService(this)'>Delete Service</button>";
        echo "</div>";
        echo "</div>";
        echo "</td>";
        echo "</tr>";
    }

    mysqli_close($conn);
}
