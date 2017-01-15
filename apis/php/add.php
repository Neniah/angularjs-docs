<?php
header('Content-type: text/javascript');
$json = array(
  'name' => 'Maria'
);

echo json_encode($json);
?>
