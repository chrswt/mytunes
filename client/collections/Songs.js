// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,
  url: 'https://api.parse.com/1/classes/songs/',

  initialize: function(params) {
    var context = this;

    // debugger;
    var data = this.fetch();

    data.done(function() {
      console.log(data);
      console.log(context);
      // data.responseJSON.results.forEach(function(song) {
      //   context.add(song);
      // });
      // console.log(context);
    });
  }

});