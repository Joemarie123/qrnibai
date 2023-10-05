<?php
require "db.php";
$results = [];
if ($_SERVER['REQUEST_METHOD'] == 'POST'){
    $login_id = isset($_POST['login_id']) ? $_POST['login_id'] : false;
    $dataArguments = [
        ':Controlno' => $_POST['Controlno'],
        ':firstname' => $_POST['firstname'],
        ':lastname' => $_POST['lastname'],
        ':middlename' => $_POST['middlename'],
        ':status' => $_POST['status'],
        ':designation' => $_POST['designation'],
        ':office_id' => $_POST['office_id'],
        ':username' => $_POST['username'],
        ':password' => password_hash($_POST['password'],PASSWORD_DEFAULT),
        ':admin' => $_POST['admin']
    ];
    $queryString = "";

    if ($login_id){
        $queryString = "UPDATE login SET firstname=:firstname, lastname=:lastname, middlename=:middlename, status=:status, designation=:designation,office_id=:office_id, username=:username, password=:password, admin=:admin WHERE login.id=:login_id";
        $dataArguments[':login_id'] = $login_id;
    } else 
        $queryString = "INSERT INTO login(Controlno,firstname,lastname,middlename,status,designation,office_id,admin,username,password) VALUES (:Controlno,:firstname, :lastname,:middlename,:status,:designation,:office_id, :admin, :username, :password)";
    

    try {
        $stmt = $conn->prepare($queryString);
        $stmt->execute($dataArguments);
        
        $results['login_id'] = $login_id ? $login_id : $conn->lastInsertId();
        
        $results['user'] = $conn->query("SELECT * FROM login WHERE login.id={$results['login_id']}")->fetchAll(PDO::FETCH_OBJ);
        
        echo json_encode($results);
    } catch (PDOException $e){
        var_dump($e);
    }
    
}
?>