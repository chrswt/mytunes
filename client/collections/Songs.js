// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,
  url: 'https://api.parse.com/1/classes/songs/',

  // initialize: function(params) {
  //   this.fetch().done(function(data) {console.log(JSON.stringify(data))});
  // },
  
  // parse: function(response) {
  //   return response.results;
  // }

});