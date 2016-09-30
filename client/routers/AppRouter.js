var AppRouter = Backbone.Router.extend({

  initialize: function(params) {
    this.model = params.model;
    this.model.on('change:currentSong', function() {
      this.setSongURL();
    }, this);
  },

  setSongURL: function() {
    var title = this.model.get('currentSong') // enter song model
                .get('title'); // retrieve property
    this.navigate('songs/' + title);
  },

  routes: {
    'songs/:title': function(title) {
      this.listenToOnce(this.model.get('library'), 'sync', function() {
        var song = this.model.get('library').findWhere({'title': title});
        song.enqueue();
      });
    }
  }

});
