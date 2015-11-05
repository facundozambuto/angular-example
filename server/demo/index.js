'use strict';

var express = require('express');

var router = express.Router();
if (!process.env.MOVIEDB_API) {
    router.get('/', function(req, res){
        res.status({status: 404});
        res.json({error: 404})
    });
} else {
    var controller = require('./movies.controller');
    router.get('/', controller.index);
    router.get('/:movieId', controller.get);
    router.get('/configuration', controller.configuration);
    router.get('/search/:query', controller.search);
}

module.exports = router;
