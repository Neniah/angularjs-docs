<?php
if(!empty($_GET['location'])){
  $maps_url = 'https://maps.googleapis.com/api/geocode/json?address=' . urlencode($_GET['location']);

  $maps_json = file_get_contents($map_url);
  $maps_array = json_decode($maps_json, true);

  $lat = $maps_array['results'][0]['geometry']['location']['lat'];
  $lng = $maps_array['results'][0]['geometry']['location']['lng'];
}

?>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Geogram</title>
  </head>
  <body>
    <form>
      <input type="text" name="location" value="">
      <button type="submit" name="button">Submit</button>
    </form>
  </body>
</html>
