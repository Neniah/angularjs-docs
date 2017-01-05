<?php
require_once 'vendor/autoload.php';
$app = new \Slim\Slim();

$db = new mysqli("localhost", "admin", "admin", "tests");


$app->get("/products", function() use ($db, $app){
  $query = $db->query("SELECT * FROM products;");
  echo json_encode($query->fetch_assoc());
});

$app->run();

?>
