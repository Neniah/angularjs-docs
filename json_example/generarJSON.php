<?php

$server = "localhost";
$user = "admin";
$pass = "admin";
$bd = "tests";

//Creamos la conexión
$conexion = mysqli_connect($server, $user, $pass,$bd)
or die("Ha sucedido un error inexperado en la conexion de la base de datos");

//generamos la consulta
$sql = "SELECT * FROM clients";
mysqli_set_charset($conexion, "utf8"); //formato de datos utf8

if(!$result = mysqli_query($conexion, $sql)) die();

$clients = array(); //creamos un array

while($row = mysqli_fetch_array($result))
{
	$id=$row['id'];
	$name=$row['name'];
	$age=$row['age'];
	$genre=$row['genre'];
	$email=$row['email'];
	$city=$row['city'];
	$phone=$row['phone'];


	$clients[] = array('id'=> $id, 'name'=> $name, 'age'=> $age, 'genre'=> $genre,
						'email'=> $email, 'city'=> $city, 'phone'=> $phone);

}

//desconectamos la base de datos
$close = mysqli_close($conexion)
or die("Ha sucedido un error inexperado en la desconexion de la base de datos");


//Creamos el JSON
//$clientes['clientes'] = $clientes;
$json_string = json_encode($clients);
echo $json_string;

//Si queremos crear un archivo json, sería de esta forma:
/*
$file = 'clientes.json';
file_put_contents($file, $json_string);
*/


?>
