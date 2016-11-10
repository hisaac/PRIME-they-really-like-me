var express = require('express');
var router = express.Router();
var bios = require('./bios');

var isaacLikes = {
  name: "Isaac",
  likeCount: 0
};

var jakeLikes = {
  name: "Jake",
  likeCount: 0
};

var andyLikes = {
  name: "Andy",
  likeCount: 0
};

router.post('/isaac', function(req, res){
  console.log('post request for isaac received');
  isaacLikes.likeCount++;
  console.log(isaacLikes);
  res.sendStatus(201);
});

router.post('/jake', function(req, res){
  console.log('post request for jake received');
  jakeLikes.likeCount++;
  console.log(jakeLikes);
  res.sendStatus(201);
});

router.post('/andy', function(req, res){
  console.log('post request for andy received');
  andyLikes.likeCount++;
  console.log(andyLikes);
  res.sendStatus(201);
});

router.get('/isaac', function(req, res){
  console.log('get request for isaac received');
  var name = isaacLikes.name;
  var count = isaacLikes.likeCount;
  var likeObject = {name: count};
  res.send(likeObject);
});

router.get('/jake', function(req, res){
  console.log('get request for jake received');
  var name = jakeLikes.name;
  var count = jakeLikes.likeCount;
  var likeObject = {name: count};
  res.send(likeObject);
});

router.get('/andy', function(req, res){
  console.log('get request for andy received');
  var name = andyLikes.name;
  var count = andyLikes.likeCount;
  var likeObject = {name: count};
  res.send(likeObject);
});

module.exports = router;
