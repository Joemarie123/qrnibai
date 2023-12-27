<?php
require "db.php";

// SELECT ALL USERS
$result = [];
try {
    // $users = $conn->query("SELECT * FROM users")
    //         ->fetchAll(PDO::FETCH_OBJ);
            
    // foreach ($users as $user){
        
    //     $grades = $conn->query("SELECT * FROM grades WHERE grades.user_id={$user->id}")
    //                             ->fetchAll(PDO::FETCH_OBJ);
                                
        
    //     $user = (array)$user;
    //     $user['grades'] = $grades;
        
    //     $result[] = $user;
    // }
    


    $result['users']=$conn->query("SELECT CONCAT(firstname, ' ', middlename, ' ', lastname) as fullname,tblemployees.* FROM tblemployees left join tblofficelink on tblemployees.controlno=tblofficelink.controlno where tblofficelink.controlno is null order by lastname")
            ->fetchAll(PDO::FETCH_OBJ);
            $conn=null;
    echo json_encode($result);
} catch (PDOException $e){
    var_dump($e);
}
            
            


?>