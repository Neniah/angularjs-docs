<?php
  $jsondata = file_get_contents("movies.json");
  $json = json_decode($jsondata, true);
  $output = '<ul>';
  foreach($json['movies'] as $movie){
    $output .= '<h4>' .$movie['title'].'</h4>';
    $output .= '<li>'.$movie['year'].'</li>';
  }
  echo $output;
?>
