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
    


    $result['events']=$conn->query("SELECT tblevents.*, SUM(case when tbleventhistory.time is not null then 1 else 0 END) as AttendanceCount FROM tblevents left join tbleventhistory on tblevents.id=tbleventhistory.event_id where event_date<CURRENT_DATE() GROUP by tblevents.ID,tblevents.Event_name,tblevents.Event_date,tblevents.Event_from,tblevents.Event_to,tblevents.Event_venue ")
            ->fetchAll(PDO::FETCH_OBJ);
    echo json_encode($result);
} catch (PDOException $e){
    var_dump($e);
}
            
            


?>