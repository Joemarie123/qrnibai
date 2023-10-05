<?php
require "db.php";
$result = [];
try {

    $stmt=$conn->query("SELECT * FROM login where id= {$_POST['userid']}")->fetch(PDO::FETCH_ASSOC);
    if($stmt){
        $hashpassword=$stmt['password'];
        $verify = password_verify($_POST['oldpassword'], $hashpassword);
        
        if($verify)
        {
            if(isset($_POST['newpassword'])){
                $newpass=password_hash($_POST['newpassword'],PASSWORD_DEFAULT);
                $sql="update login set username='{$_POST['username']}' , password='{$newpass}' where id={$_POST['userid']}";
            }
            else{
                $sql="update login set username='{$_POST['username']}'  where id={$_POST['userid']}";
            }
            $stmt=$conn->query($sql);
            $results['auth']='success';    
        }
        else
        $results['auth']='failed';
    }
    else
    $results['auth']='none';

    $results['user']=$conn->query("SELECT * FROM login where id={$_POST['userid']}")
            ->fetchAll(PDO::FETCH_OBJ);
    echo json_encode($results);
} catch (PDOException $e){
    var_dump($e);
}
        
?>