// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    this.on('add', function(e) {
      if (this.length === 1) { this.playFirst(); }
    });

    this.on('ended', function(e) {
      this.shift();
      if (this.length) { this.playFirst(); }
    });

    this.on('dequeue', function(e) {
      this.remove(e);
    }, this);
  },

  playFirst: function() {
    this.at(0).play();
  }
});
