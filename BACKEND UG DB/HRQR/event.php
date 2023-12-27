<?php
require "db.php";
$results = [];
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $event_ID = isset($_POST['event_ID']) ? $_POST['event_ID'] : false;
    $dataArguments = [
        ':Event_name' => $_POST['event_name'],
        ':Event_date' => $_POST['event_date'],
        ':Event_from' => $_POST['event_from'],
        ':Event_to' => $_POST['event_to'],
        ':Event_venue' => $_POST['event_venue'],
    ];
    $queryString = "";

    if ($event_ID) {
        $stmt = $conn->query("select * from tbleventhistory where Event_ID=:event_ID")->fetchAll(PDO::FETCH_ASSOC);
        if ($stmt) {
            $result['response'] = 'Cannot update the Event because it has already a participant!';

        } else {
            $queryString = "UPDATE tblevents SET event_name=:Event_name, event_date=:Event_date, event_from=:Event_from, event_to=:Event_to, event_venue=:Event_venue WHERE tblevents.id=:event_ID";
           
        }

    } else
        $queryString = "INSERT INTO tblevents (event_name,event_date,event_from,event_to,event_venue) VALUES (:Event_name, :Event_date,:Event_from,:Event_to,:Event_venue)";


    try {
        $stmt = $conn->prepare($queryString);
        $stmt->execute($dataArguments);

        $results['event_ID'] = $event_ID ? $event_ID : $conn->lastInsertId();

        
        $conn=null;
        echo json_encode($results);
    } catch (PDOException $e) {
        var_dump($e);
    }

}
?>