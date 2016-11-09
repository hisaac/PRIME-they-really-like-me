var express = require('express');
var router = express.Router();

// team data
var team = [
  {
    name: 'Jake',
    bio: "testing",
    image: './assets/images/jake.png'
  },
  {
    name: 'Isaac',
    bio: "this",
    image: './assets/images/isaac.png'
  }

];

router.get('/', function(req, res) {
  console.log('get team from module');
  res.send(team);
});

module.exports = router;
