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
	 
		 // Getting the received JSON into $json variable.
		 $json = file_get_contents('php://input');
		 
		 // decoding the received JSON and store into $obj variable.
		 $obj = json_decode($json,true);
		 
		 // Populate name from JSON $obj array and store into $name.
		$name = $obj['name'];
		 
		// Populate email from JSON $obj array and store into $email.
		$email = $obj['email'];
		 
		// Populate phone number from JSON $obj array and store into $phone_number.
		$phone_number = $obj['phone_number'];
		 
		 // Creating SQL query and insert the record into MySQL database table.
		$Sql_Query = "insert into UserInfoTable (name,email,phone_number) values ('$name','$email','$phone_number')";
		 
		 
		 if(mysqli_query($connect_,$Sql_Query)){
		 
		 // If the record inserted successfully then show the message.
		$MSG = 'Data Inserted Successfully into MySQL Database' ;
		 
		// Converting the message into JSON format.
		$json = json_encode($MSG);
		 
		// Echo the message.
		 echo $json ;
		 
		 }
		 else{
		 
		 echo 'Try Again'; 
		 }
		 mysqli_close($connect_);
?>

