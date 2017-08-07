<?php

      $servername = "localhost";
      $username = "root";
      $password = "";
      $dbname = "knitting";
      $conn = new mysqli($servername, $username, $password, $dbname);

      if($conn->connect_error){
              die("connection failed: " . $conn->conect_error);
      }
      $sql = $_REQUEST["query"];
      $result = $conn->query($sql);
      $set = [];
      if ($result->num_rows > 0){
              while($row = $result->fetch_assoc()){
			$base64 = 'data:image/jpeg;base64,' . base64_encode($row["Pic"]);
			array_push($set, ["name" => $row["Name"], "colour"=> $row["color"], "pic" => $base64]);
              }
      }
      echo json_encode($set);

?>
