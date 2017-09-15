<?php 
	define("DB_SERVER","localhost");
	define("DB_USER","root");
	define("DB_PASS","");
	define("DB_NAME","payroll");
	
	$connect_=mysqli_connect(DB_SERVER,DB_USER,DB_PASS,DB_NAME);
	

	if (mysqli_connect_errno()){
		die("Database Connection failed");
	}else{
		echo("connection Ready");
	}
	 
	$json = file_get_contents('php://input');
	$obj_  = json_decode($json, true);
	
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
		$json = json_encode($msg_);
		
		echo $json;
	}else{
		echo 'Try Again';
	}
	mysqli_close($connect_);
?>

