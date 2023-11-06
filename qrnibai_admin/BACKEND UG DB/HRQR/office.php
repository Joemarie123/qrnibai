<?php
require "db.php";

try{
    // $stmt=$conn->query("SELECT office from tbloffice")
    // ->fetch(PDO::FETCH_ASSOC);

    // if($stmt){
        $jsonData = file_get_contents('php://input');
        $dataArray = json_decode($jsonData, true);
        // echo "<pre>";
        // print_r($dataArray);
        // echo "</pre>";
        foreach($dataArray as $office){
            $stmt=$conn->query("insert into tbloffice (office) values('{$office}')")->fetchAll(PDO::FETCH_ASSOC);
        }

    // }
}catch(PDOException $e){
        var_dump($e);
}
