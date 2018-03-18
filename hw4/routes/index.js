var express = require('express');
var router = express.Router();

var cassandra = require('cassandra-driver');
var async = require('async');
var client = new cassandra.Client({contactPoints: ['localhost'], keyspace: 'hw4'});

var multer = require('multer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/deposit', function(req, res){
  // depositFiles(req.body.filename, req.file, function(err, ret){

  // });
  res.send(req.file);
});

function depositFiles(filename, contents, callback){
  // client.execute("INSERT INTO imgs (")
}
module.exports = router;
