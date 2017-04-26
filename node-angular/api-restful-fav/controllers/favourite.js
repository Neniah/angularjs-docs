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

module.exports = {
  test
}
