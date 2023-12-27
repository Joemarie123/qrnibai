<?php
require "db.php";
$results = [];
if ($_SERVER['REQUEST_METHOD'] == 'POST'){
  // try {
    
  //   $stmt = $conn->prepare("SELECT * FROM login WHERE login.username=:username AND login.password=:password");

  //   $stmt->execute([
  //     ':username' => $_POST['username'],
  //     ':password' => password_hash($_POST['password'],PASSWORD_DEFAULT)
  //   ]);

  //   $results['users'] = $stmt->fetchAll(PDO::FETCH_OBJ);
    
  //   echo json_encode($results);
  // } catch (PDOException $e){
  //   var_dump($e);
  // }
    
  try {
 
    $stmt=$conn->query("SELECT * FROM login where login.username = '{$_POST['username']}'")->fetch(PDO::FETCH_ASSOC);
    
  
    if($stmt){
        $hashpassword=$stmt['password'];
        $verify = password_verify($_POST['password'], $hashpassword);
        
        if($verify)
        {
        $results['auth']='passed';
        $results['user']=$stmt;
        }
        else
        $results['auth']='failed';
    }
    else
    $results['auth']='none';
    
   
    $conn=null;
    echo json_encode($results);
} catch (PDOException $e){
    var_dump($e);
}
}
?>