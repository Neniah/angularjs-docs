'use strict'

var express = require('express');
var FavouriteController = require('../controllers/favourite');
var api = express.Router();

api.get('/test/:name?', FavouriteController.test);

module.exports = api;
