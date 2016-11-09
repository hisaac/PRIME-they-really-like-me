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
      $('#teamMembers').append('<div><h2>' + team[i].name + '</h2><p>' + team[i].bio + '</p><img src="' + team[i].image + '"/><button id = "like' + team[i].name + '">Like Me</button>');
    }
  }


});

// $(document).ready(function() {
//   console.log('up and running!');
//
//   getCats();
//
//   function getCats() {
//     $.ajax({
//       type: 'GET',
//       url: '/cats',
//       success: function(data) {
//         console.log('got the cat data!');
//         appendCats(data);
//       }
//     });
//   }
//
//   function appendCats(cats) {
//     $("#catBox").empty();
//
//     for (var i = 0; i < cats.length; i++) {
//       $("#catBox").append('<div><h2>' + cats[i].catName + '</h2><p>' + cats[i].temperment + '</p></div>');
//     }
//
//   }
//
//   $("#catForm").on("submit", postCat);
//
//   function postCat(cat) {
//     event.preventDefault();
//     var newCat = {};
//
//     $.each($('#catForm').serializeArray(), function(i, field) {
//       newCat[field.name] = field.value;
//     });
//
//     console.log(newCat);
//
//     $.ajax({
//       type: 'POST',
//       url: '/cats',
//       data: newCat,
//       success: function(data) {
//         getCats();
//       }
//     });
//   }
// });
