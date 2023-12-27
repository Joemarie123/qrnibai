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
    


    $result['users']=$conn->query("SELECT  CONCAT(tblemployees.firstname, ' ', tblemployees.middlename, ' ', tblemployees.lastname) as fullname, tblemployees.controlno,tblemployees.designation, tblemployees.status,office FROM tblemployees left join vwoffice on tblemployees.controlno=vwoffice.controlno")
            ->fetchAll(PDO::FETCH_OBJ);
            $conn=null;
    echo json_encode($result);
} catch (PDOException $e){
    var_dump($e);
}
            
            


?>