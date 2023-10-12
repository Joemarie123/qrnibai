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
    
    //  $conn->query("DELETE FROM tblemployees where ID<>0");
    
    //  $tableName = "tblemployees";

    // Define the new auto-increment value (replace with your desired value)
    // $newAutoIncrementValue = 1;

    // Reset the auto-increment value using an SQL query
    // $sql = "ALTER TABLE $tableName AUTO_INCREMENT = :newAutoIncrementValue";
    // $stmt = $conn->prepare($sql);
    // $stmt->bindParam(':newAutoIncrementValue', $newAutoIncrementValue, PDO::PARAM_INT);
    // $stmt->execute();
    
    $mysqlcontrolno=$conn->query("Select controlno from tblemployees order by controlno")->fetchAll(PDO::FETCH_ASSOC);

    // $pmis=$mssqlcon->query("select count(controlno) as employeecount from xservice where getdate() between fromdate and todate")->fetchAll(PDO::FETCH_OBJ);
    // $result['count']=$pmis;
    // echo json_encode($result);

    $pmis=$mssqlcon->prepare("SELECT surname,firstname,middlename,status,designation,xpersonal.controlno from xpersonal INNER JOIN xservice on xpersonal.controlno=xservice.controlno where getdate() between fromdate and todate");
    $pmis->execute();
    
    // $result['users']=$mssqlcon->query("SELECT surname,firstname,middlename,status,designation,controlno from vwactive")->fetchAll(PDO::FETCH_OBJ);
    $mysqlquery="INSERT into tblemployees (lastname,firstname,middlename,status,designation,controlno) values(?,?,?,?,?,?)";
    $stmt= $conn->prepare($mysqlquery);

    foreach($pmis as $row){
        if(!in_array($row['controlno'],$mysqlcontrolno))
        $stmt->execute([$row['surname'],$row['firstname'],$row['middlename'],$row['status'],$row['designation'],$row['controlno']]);
    }
    // echo json_encode($result);

    echo "Data transferred successfully.";
} catch (PDOException $e){
    // var_dump($e);
    echo "Error: " . $e->getMessage();
}
            
            


?>