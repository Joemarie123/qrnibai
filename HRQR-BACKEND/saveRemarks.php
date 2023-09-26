<?php
require "db.php";
$results = [];
if ($_SERVER['REQUEST_METHOD'] == 'POST'){
    try {
        $jsonData = file_get_contents('php://input');
        $dataArray = json_decode($jsonData, true);
        // echo json_encode($dataArray);
        if (isset($dataArray)) {
            $data = $dataArray;
        
            // Prepare and execute the insert statements
            $sql = "INSERT INTO tbleventhistory(event_id, office, fullname,controlno,designation,status,remarks) VALUES(?,?,?,?,?,?,?)";
            $stmt = $conn->prepare($sql);
  
            foreach ($data as $row) {
                $stmt->execute( [$row['value']['event_id'], $row['value']['office'], $row['value']['fullname'],$row['value']['Controlno'],$row['value']['designation'],$row['value']['status'],$row['value']['Remarks']]);
                // if (!$stmt->execute()) {
                //     die("Error: " . $stmt->error);
                // }
            }
        
           
        } else {
            die("No data received from Vue.js.");
        }
        echo "done!";
    } catch (PDOException $e){
        var_dump($e);
    }
    
}
?>  