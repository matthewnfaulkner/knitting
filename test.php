<?php
	$servername = "localhost";
	$username = "root";
	$password = "299792458Ms";

	$conn = newmysqli($servername, $username, $password);

	if($conn->connect_error){
		die("connection failed: " . $conn->conect_error);
	}

	echo "connected successfully";

?>
