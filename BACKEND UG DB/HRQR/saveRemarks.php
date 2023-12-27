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
            $sql2 = "UPDATE tbleventhistory set remarks=:remarks where controlno=:controlno and event_id=:event_id";
            $sqlupdate="SELECT * from tbleventhistory where controlno=:controlno and event_id=:event_id";
            $stmt = $conn->prepare($sql);
            $stmt2=$conn->prepare($sql2);
            $update=$conn->prepare($sqlupdate);
            foreach ($data as $row) {
                $dataarguments=[
                    ':controlno'=>$row['value']['Controlno'],
                    ':event_id'=>$row['value']['event_id']
                ];
                $update->execute($dataarguments);
                if($update->fetchAll(PDO::FETCH_ASSOC)){
                    $updatearg=[
                        ':controlno'=>$row['value']['Controlno'],
                        ':event_id'=>$row['value']['event_id'],
                        ':remarks'=>$row['value']['remarks']
                    ];
                    $stmt2->execute($updatearg);
                }else{
                    $stmt->execute( [$row['value']['event_id'], $row['value']['office_id'], $row['value']['fullname'],$row['value']['Controlno'],$row['value']['designation'],$row['value']['status'],$row['value']['Remarks']]);
                }
                
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