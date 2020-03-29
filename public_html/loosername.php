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
  $pbett=$_SESSION["betupdt"];	
    $loose=$_SESSION["uid2"];
$sql="select userbet from casino_tbl where userid='$loose'";

	 $result1=$conn->query($sql);
	 $row=$result1->fetch_assoc();
	 $betvalue=$row["userbet"];
echo "looser is-".$loose;
echo "bet is-".$betvalue;

$sql="select vmoney from casino_tbl where userid='$loose'";

	 $result=$conn->query($sql);
	 $row=$result->fetch_assoc();
	 $money=$row["vmoney"];
	$money=$money-$betvalue;
$sql="UPDATE casino_tbl SET vmoney='$money' where userid='$loose'";

     
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