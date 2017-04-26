'use strict'

var express = require('express');
var FavouriteController = require('../controllers/favourite');
var api = express.Router();

api.get('/test/:name?', FavouriteController.test);
api.get('/favourite/:id?', FavouriteController.getFavourite);
api.post('/favourite', FavouriteController.saveFavourite);



module.exports = api;
