$(document).ready(function(){
  console.log('up and running!');
var likes = 0;
  $('#teamMembers').on('click', 'button', function(){
    console.log('button works');

    var name = $(this).attr('id').substring(4).toLowerCase();

    console.log('extracted name: ' + name);

    $.ajax({
      type: 'POST',
      url: '/likes/' + name,
      success: function() {
        console.log(name + ' likes POST success');
      },
      error: function() {
        console.log('ajax /likes/* POST error');
      }
    });

    $.ajax({
      type: 'GET',
      url: '/likes/' + name,
      success: function(data) {
        console.log(data + ' likes GET success');
        appendLikes(name, data);
      },
      error: function() {
        console.log('ajax /likes/* GET error');
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
      $('#teamMembers').append('<div><h2>' + team[i].name + '</h2><p>' + team[i].bio + '</p><img src="' + team[i].image + '"/><p><button id = "like' + team[i].name + '">Like Me</button><span id="likeCount' + team[i].name.toLowerCase() + '"> Likes: 0</span></p>');

    }
  }

function appendLikes(name, likeObject) {
  $('#likeCount' + name).text(' Likes: ' + likeObject.name);

}

});
