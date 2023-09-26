<?php
require "db.php";
$results = [];
if ($_SERVER['REQUEST_METHOD'] == 'POST'){
    try {
    $controlno = isset($_POST['Controlno']) ? $_POST['Controlno'] : false;
    if($controlno){
    $dataArguments = [
        ':Controlno' => $_POST['Controlno'],
        ':Event_id' => $_POST['event_id'],
        ':office' => $_POST['office'],
        ':fullname' => $_POST['fullname'],
        ':status' => $_POST['status'],
        ':designation' => $_POST['designation'],
        ':time' => $_POST['time'],
        ':remarks' => $_POST['remarks']
        
    ];
    $queryString = "";
    
        
        $queryString = "INSERT INTO tbleventhistory(Controlno,event_id,office,fullname,status,designation,time,remarks) VALUES (:Controlno,:Event_id, :office,:fullname,:status,:designation,:time, :remarks)";
    

   
        $stmt = $conn->prepare($queryString);
        $stmt->execute($dataArguments);
        
    }
        
        $results['user'] = $conn->query("SELECT * FROM tbleventhistory WHERE tbleventhistory.event_id={$_POST['event_id']}")->fetchAll(PDO::FETCH_OBJ);
        $stmt->close();
        echo json_encode($results);
    } catch (PDOException $e){
        var_dump($e);
    }
    
}
?>