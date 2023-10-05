<?php
require "db.php";
$results = [];
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
   
    $dataArguments2 = [
        ':Event_ID' => $_POST['event_id']
        
    ];
    $dataArguments = [
        ':Event_ID' => $_POST['event_id'],
        ':office_id' => $_POST['office_id']
    ];
    // $queryString = "";

    // if ($event_ID) {
    //     $stmt = $conn->query("select * from tbleventhistory where Event_ID=:event_ID")->fetchAll(PDO::FETCH_ASSOC);
    //     if ($stmt) {
    //         $result['response'] = 'Cannot update the Event because it has already a participant!';

    //     } else {
    //         $queryString = "UPDATE tblevents SET event_name=:Event_name, event_date=:Event_date, event_from=:Event_from, event_to=:Event_to, event_venue=:Event_venue WHERE tblevents.id=:event_ID";
           
    //     }

    // } else
    //     $queryString = "INSERT INTO tblevents (event_name,event_date,event_from,event_to,event_venue) VALUES (:Event_name, :Event_date,:Event_from,:Event_to,:Event_venue)";


    try {
        $stmt = $conn->prepare("Select * from tblevents where id=:Event_ID");
        $stmt->execute($dataArguments2);

        $results['event_details'] = $stmt->fetchAll(PDO::FETCH_ASSOC);

        $stmt2 = $conn->prepare("select CONCAT(firstname, ' ', middlename, ' ', lastname) as fullname,vwemployee.*, eventhistory.Time as timescanned,eventhistory.Remarks from vwemployee left   join (select controlno, time , remarks from tbleventhistory where event_id=:Event_ID) as eventhistory on vwemployee.controlno=eventhistory.Controlno where vwemployee.office_id=:office_id");
        $stmt2->execute($dataArguments);

        $results['event_attendance'] = $stmt2->fetchAll(PDO::FETCH_ASSOC);
        

        echo json_encode($results);
    } catch (PDOException $e) {
        var_dump($e);
    }

}
?>