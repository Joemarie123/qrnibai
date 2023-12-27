<?php
require "db.php";
$results = [];
if ($_SERVER['REQUEST_METHOD'] == 'POST'){
    $office_id = isset($_POST['office_id']) ? $_POST['office_id'] : false;
    $dataArguments = [
        ':office' => $_POST['office'],
       
    ];
    $queryString = "";

    if ($office_id){
        $queryString = "UPDATE tbloffice SET office=:office WHERE tbloffice.id=:office_id";
        $dataArguments[':office_id'] = $office_id;
    } else 
        $queryString = "INSERT INTO tbloffice(office) VALUES (:office)";
    

    try {
        $stmt = $conn->prepare($queryString);
        $stmt->execute($dataArguments);
        
        $results['office_id'] = $office_id ? $office_id : $conn->lastInsertId();
        
        $results['office'] = $conn->query("SELECT * FROM tbloffice WHERE tbloffice.id={$results['office_id']}")->fetchAll(PDO::FETCH_OBJ);
        
        $conn=null;
        echo json_encode($results);
    } catch (PDOException $e){
        var_dump($e);
    }
    
}
?>