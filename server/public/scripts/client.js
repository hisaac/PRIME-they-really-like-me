$(document).ready(function(){
  console.log('up and running!');

  $('#teamMembers').on('click', '#likeIsaac', function(){
    console.log('button works');

    $.ajax({
      type: 'POST',
      url: '/likes/isaac',
      success: function() {
        console.log('isaac likes success');
      },
      error: function() {
        console.log('ajax /likes/isaac error');
      }
    });
  });

  $('#teamMembers').on('click', '#likeJake', function(){
    console.log('button works');

    $.ajax({
      type: 'POST',
      url: '/likes/jake',
      success: function() {
        console.log('Jake likes success');
      },
      error: function() {
        console.log('ajax /likes/jake error');
      }
    });
  });

  getTeam();

  function getTeam(){
    $.ajax({
      type: 'GET',
      url: '/bios',
      success: function(data) {
        appendTeam(data);
      },
      error: function() {
        console.log('ajax /bios error');
      }
    });
  }

  function appendTeam(team) {
    $('#teamMembers').empty();

    for (var i = 0; i < team.length; i++) {
      $('#teamMembers').append('<div><h2>' + team[i].name + '</h2><p>' + team[i].bio + '</p><img src="' + team[i].image + '"/><p><button id = "like' + team[i].name + '">Like Me</button></p>');
    }
  }


});
