<?php
    session_start();
?>
<html>
    <body onclick="window.location.href='winner.php';">
<a ></a>
        <?php
            
$servername= "localhost";
$username= "id11161861_root";
$password= "123456";
$dbname= "id11161861_vegas";
	
 
$conn= new mysqli($servername, $username, $password, $dbname);
if($conn->connect_error)
{ 
die("connection failed: ".$conn->connect_error);
}
  $pbet=$_SESSION["betupdt"];	
    $winn=$_SESSION["uid1"];
$sql="select userbet from casino_tbl where userid='$winn'";

	 $result1=$conn->query($sql);
	 $row=$result1->fetch_assoc();
	 $betvalue=$row["userbet"];
echo "winner is-".$winn;
echo "bet is-".$betvalue;

$sql="select vmoney from casino_tbl where userid='$winn'";

	 $result=$conn->query($sql);
	 $row=$result->fetch_assoc();
	 $money=$row["vmoney"];
	$money=$money+2*$betvalue;
$sql="UPDATE casino_tbl SET vmoney='$money' where userid='$winn'";

     
if($conn->query($sql)===TRUE)
{
    echo "<script>
	alert('money updated');
	</script>";

}
else
{
echo "error: ".$sql. "<br>".$conn->error;
}

    ?>
    </body>
</html>