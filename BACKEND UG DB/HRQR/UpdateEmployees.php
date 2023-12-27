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


    // $pmis=$mssqlcon->query("select count(controlno) as employeecount from xservice where getdate() between fromdate and todate")->fetchAll(PDO::FETCH_OBJ);
    // $result['count']=$pmis;
    // echo json_encode($result);
    $mysqlcontrolno = $conn->query("Select controlno from tblemployees order by controlno")->fetchAll(PDO::FETCH_ASSOC);

    $pmis = $mssqlcon->query("SELECT surname,firstname,middlename,status,designation,xpersonal.controlno from xpersonal INNER JOIN xservice on xpersonal.controlno=xservice.controlno where getdate() between fromdate and todate")
        ->fetchAll(PDO::FETCH_ASSOC);
    // $pmis->execute()->fetchAll(PDO::FETCH_ASSOC);

    // $result['users']=$mssqlcon->query("SELECT surname,firstname,middlename,status,designation,controlno from vwactive")->fetchAll(PDO::FETCH_OBJ);
    $mysqlquery = "INSERT into tblemployees (lastname,firstname,middlename,status,designation,controlno) values(?,?,?,?,?,?)";
    $mysqlquery2 = "UPDATE tblemployees set lastname=:lastname,firstname=:firstname,middlename=:middlename,status=:status,designation=:designation where controlno=:controlno";
    $stmt2 = $conn->prepare($mysqlquery2);
    $stmt = $conn->prepare($mysqlquery);
    // echo "mysql=" .json_encode($mysqlcontrolno);
    // echo "pmis=" .json_encode($pmis);
    $forexecution['update']=[];
    $forexecution['insert']=[];
    foreach ($pmis as $row) {
        $duplicate = false;
        // if(in_array($row['controlno'],$mysqlcontrolno)){
        //     echo "naa=" .$row['controlno'];
        // }else{
        //     // $stmt->execute([$row['surname'],$row['firstname'],$row['middlename'],$row['status'],$row['designation'],$row['controlno']]);
        //     echo "wala = " . $row['controlno'];
        // }
        foreach ($mysqlcontrolno as $item) {
            if ($row['controlno'] == $item['controlno']) {
                $duplicate = true;
            }
        }
        if ($duplicate) {
            // $stmt2->bindParam(1, $row['surname']);
            // $stmt2->bindParam(2, $row['firstname']);
            // $stmt2->bindParam(3, $row['middlename']);
            // $stmt2->bindParam(4, $row['status'],);
            // $stmt2->bindParam(5, $row['designation']);
            // $stmt2->bindParam(6, $row['controlno']);
            // $dataArguments = [
            //     ':lastname' => $row['surname'],
            //     ':firstname' => $row['firstname'],
            //     ':middlename' => $row['middlename'],
            //     ':status' =>  $row['status'],
            //     ':designation' => $row['designation'],
            //     ':controlno' => $row['controlno']
            // ];
            // $stmt2->execute($dataArguments);
            array_push($row,$forexecution['update']);
        } else {
            array_push($row,$forexecution['insert']);
            // $stmt->execute([$row['surname'], $row['firstname'], $row['middlename'], $row['status'], $row['designation'], $row['controlno']]);
        }
    }
    // echo json_encode($result);

    foreach($forexecution['update'] as $row){
        $stmt2->execute([$row['surname'], $row['firstname'], $row['middlename'], $row['status'], $row['designation'], $row['controlno']]);
    }

    foreach($forexecution['insert'] as $row){
        $stmt->execute([$row['surname'], $row['firstname'], $row['middlename'], $row['status'], $row['designation'], $row['controlno']]);
    }
    $conn=null;
    echo "Data transferred successfully.";
} catch (PDOException $e) {
    // var_dump($e);
    echo "Error: " . $e->getMessage();
}




?>