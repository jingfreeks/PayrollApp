<?php require_once("../includes/functions/db_connections.php");?>
<?php
	$json_ = file_get_contents('php://input');
	$obj_  = json_decode($json_, true);
	
	$email_ = $obj_['email_'];
	$name_  = $obj_['name_'];
	$password_ = $obj_['password_'];
	$password1_ = $obj_['password1_'];
	
	$query  = "insert into register_ (";
	$query .= " email_, name_, password_, password1_";
	$query .= ") values(";
	$query .= " '{$email_}',{$name_},{$password_}, {$password1_}";
	$query .= ")";
	
	if(mysqli_query($connect_, $query)){
		$msg_= 'Data Inserted Successfully into the Database';
		$json_ = json_encode($msg_);
		
		echo $json_;
	}else{
		echo 'Try Again';
	}
	mysqli_close($connect_);
?>