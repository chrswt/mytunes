var songData;

var fetch = function() {
  $.ajax({
    url: 'https://api.parse.com/1/classes/songs/',
    type: 'GET',
    contentType: 'application/json',
    success: function(data) {
      // console.log(data);
      songData = data.results;
      // set up model objects
      var library = new Songs(songData);
      var app = new AppModel({library: library});

      // build a view for the top level of the whole app
      var appView = new AppView({model: app});

      // put the view onto the screen
      $('body').append(appView.render());
    },
    error: function() {
      console.log('fetch failed');
    }
  });
};