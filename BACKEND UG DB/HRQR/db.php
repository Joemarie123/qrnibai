<?php
header('Content-Type: application/json');
$conn = null;
$DB_HOST = 'localhost';
$DB_NAME = 'hrqr';
$DB_USER = 'root';
$DB_PASSWORD = '';

$mssqlcon= null;
$server_name = "192.168.2.205";
$database_name = "pmis2003";

try {
    $conn = new PDO("mysql:host=$DB_HOST;dbname=$DB_NAME", $DB_USER, $DB_PASSWORD);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $mssqlcon= new PDO("sqlsrv:Server=$server_name;Database=$database_name", "pmis2003", "bomber");
    $mssqlcon->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e){
    var_dump($e);
}
// var_dump($conn);

?>