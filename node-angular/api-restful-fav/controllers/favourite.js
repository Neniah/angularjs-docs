'use strict'

function test(req, res){

  if(req.params.name){
    var name = req.params.name;
  }else {
    var name = "Without name";
  }

  res.status(200).send({
    data: [2,3,4],
    message: "Hello world with NodeJS and Express - " + name });
}

function getFavourite(req, res){
  var favouriteId = req.params.id;

  res.status(200).send({data: favouriteId});

}

function getFavourites(req, res){

}

function saveFavourite(req, res){
  var params = req.body;

  res.status(200).send({favourite: params});
}

function updateFavourite(req, res){

}

function deleteFavourite(req, res){

}


module.exports = {
  test
}
