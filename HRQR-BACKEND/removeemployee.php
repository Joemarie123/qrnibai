<?php
require "db.php";
$results = [];
if ($_SERVER['REQUEST_METHOD'] == 'POST'){
   
    try {

        $dataArguments = [
            ':controlno' => $_POST['controlno'],
           
        ];
        $queryString = "DELETE from tblofficelink where controlno=:controlno";

        $stmt = $conn->prepare($queryString);
        $stmt->execute($dataArguments);
        echo "OK";
    } catch (PDOException $e){
        var_dump($e);
    }
    
}
?>