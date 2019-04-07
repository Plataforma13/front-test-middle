var assert = require('assert');
var express = require('express');
var restify = require('restify-clients');
var router = express.Router();

var client = restify.createJsonClient({
    url: 'http://5ba412108da2f20014654cf8.mockapi.io/api/v1'
});

router.get('/', function(req, res, next) {
    client.get('/flights', function(err, request, response, obj) {
        assert.ifError(err);
        res.json(obj);
    });
});

module.exports = router;