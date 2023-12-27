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
    

        $result['office']=$conn->query("SELECT * FROM tbloffice ")
        ->fetchAll(PDO::FETCH_OBJ);
    $result['users']=$conn->query("SELECT tbloffice.*,count(tblofficelink.office_id) as employees FROM tbloffice inner join tblofficelink on tbloffice.id=tblofficelink.office_id group by tblofficelink.office_id")
            ->fetchAll(PDO::FETCH_OBJ);
            $conn=null;
    echo json_encode($result);
} catch (PDOException $e){
    var_dump($e);
}
            
            


?>