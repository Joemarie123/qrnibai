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
            $result['response'] = 'Cannot update the Event because it already have a participant!';

        } else {
            $queryString = "UPDATE tblevent SET event_name=:Event_name, event_date=:Event_date, event_from=:Event_from, event_to=:Event_to, event_venue=:Event_venue WHERE tblevent.id=:event_ID";
           
        }

    } else
        $queryString = "INSERT INTO login(firstname,lastname,middlename,status,designation,office_id,admin,username,password) VALUES (:firstname, :lastname,:middlename,:status,:designation,:office_id, :admin, :username, :password)";


    try {
        $stmt = $conn->prepare($queryString);
        $stmt->execute($dataArguments);

        $results['event_ID'] = $event_ID ? $event_ID : $conn->lastInsertId();

        $results['user'] = $conn->query("SELECT * FROM login WHERE login.id={$results['event_ID']}")->fetchAll(PDO::FETCH_OBJ);

        echo json_encode($results);
    } catch (PDOException $e) {
        var_dump($e);
    }

}
?>