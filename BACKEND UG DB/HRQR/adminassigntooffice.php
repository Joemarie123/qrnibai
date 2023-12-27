<?php
require "db.php";
$results = [];
if ($_SERVER['REQUEST_METHOD'] == 'POST'){
    try {
       $stmt=$conn->query("select * from tblofficelink where controlno='{$_POST['controlno']}'")->fetchAll(PDO::FETCH_ASSOC);
       if($stmt){
        $stmt=$conn->query("UPDATE tblofficelink set office_id={$_POST['office_id']} where controlno={$_POST['controlno']}");

       }else{
        $stmt=$conn->query("INSERT into tblofficelink(controlno,office_id) values('{$_POST['controlno']}',{$_POST['office_id']})");
       }
       $conn=null;
        echo "done!";
    } catch (PDOException $e){
        var_dump($e);
    }
    
}
?>  