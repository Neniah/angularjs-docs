<?php

require_once 'vendor/autoload.php';
$app = new \Slim\Slim();

$db = new mysqli("localhost", "admin", "admin", "tests");


$app->get("/products", function() use ($db, $app){
  $query = $db->query("SELECT * FROM products;");
  $products = array();
  while($fila=$query->fetch_assoc()){
    $products[]= $fila;
  }
  echo json_encode($products);
});

$app->post("/products", function() use($db, $app){

  $query = "INSERT INTO";
  $insert = $db->query($query);
  echo json_encode($products)
});

$app->run();

?>
