<?php

	$servername = "localhost";
	$username = "root";
	$password = "299792458Ms";
	$dbname = "matty";
	$conn = new mysqli($servername, $username, $password, $dbname);

	if($conn->connect_error){
		die("connection failed: " . $conn->conect_error);
	}
	
	$sql = "SELECT * FROM loves WHERE name = 'Sam'";
	$result = $conn->query($sql);
	if ($result->num_rows > 0){
		while($row = $result->fetch_assoc()){
			echo "id: " . $row["Name"];
		}
	}

	echo "connected successfully";

?>
