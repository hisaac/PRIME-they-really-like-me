var express = require('express');
var router = express.Router();

// team data
var team = [
  {
    name: 'Jake',
    bio: "Jake is an intuitive problem solver who is currently nurturing a passion for ones and zeros that has been growing for the last six years. He enjoys playing acoustic guitar and attending bluegrass shows and festivals in his free time.",
    image: './assets/images/jake.png'
  },
  {
    name: 'Isaac',
    bio: "Isaac used to be the tallest person in his family, until his brother surpassed him just last month. His favorite Star Trek series is Deep Space 9, and can talk about it at great length.",
    image: './assets/images/isaac.png'
  },
  {
    name: 'Andy',
    bio: "Andy was a ruggedly handsome and dashing archeologist in his early twenties. Though he became disillusioned with the constant threat of adventure and derring do. He humbly put away his whip on a whim while visiting a squalid and abandoned border town. He wandered aimlessly for a time, with a short stint in a secret society of assassins. But the less said of that the better. After avenging the death of his family he found a home, amongst a room of nerds.",
    image: './assets/images/andy.png'
  }

];

router.get('/', function(req, res) {
  console.log('get team from module');
  res.send(team);
});

module.exports = router;
