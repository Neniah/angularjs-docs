<?php
  $jsondata = file_get_contents("movies.json");
  $json = json_decode($jsondata, true);

  echo $json['movies'][0]['title'];
?>
