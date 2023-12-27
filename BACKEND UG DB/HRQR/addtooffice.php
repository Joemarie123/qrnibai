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
            $sql = "INSERT INTO tblofficelink(controlno, office_id) VALUES(?,?)";
            $stmt = $conn->prepare($sql);
  
            foreach ($data as $row) {
                $stmt->execute( [$row['value']['controlno'], $row['value']['office_id']]);
                // if (!$stmt->execute()) {
                //     die("Error: " . $stmt->error);
                // }
            }
        
           
        } else {
            die("No data received from Vue.js.");
        }
        $conn=null;
        echo "done!";
        
    } catch (PDOException $e){
        var_dump($e);
    }
    
}
?>  