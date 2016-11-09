var express = require('express');
var router = express.Router();

var isaacLikes = {
  name: "Isaac",
  likeCount: 0
};

var jakeLikes = {
  name: "Jake",
  likeCount: 0
};

router.post('/isaac', function(req, res){
  console.log('post request for isaac received');
  isaacLikes.likeCount++;
  res.sendStatus(201);
});

router.post('/jake', function(req, res){
  jakeLikes.likeCount++;
  res.sendStatus(201);
});

router.get('/isaac', function(req, res){
  console.log('get request for isaac received');
  res.send(isaacLikes);
}

router.get('/jake', function(req, res){
  res.send(jakeLikes);
}

module.exports = router;
