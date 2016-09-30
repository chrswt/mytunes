// AppView.js - Defines a backbone view class for the whole music app.
var AppView = Backbone.View.extend({

  initialize: function(params) {
    this.visualizerView = new VisualizerView({model: this.model.get('currentSong')});
    this.playerView = new PlayerView({model: this.model.get('currentSong')});
    this.libraryView = new LibraryView({collection: this.model.get('library')});
    this.songQueueView = new SongQueueView({collection: this.model.get('songQueue')});
    this.searchView = new SearchView({collection: this.model.get('library')});
    // change:currentSong - this is Backbone's way of allowing you to filter events to
    // ONLY receive change events for the specific property, 'currentSong'
    this.model.on('change:currentSong', function(model) {
      wavesurfer.load(model.get('currentSong').get('url'));
      wavesurfer.on('ready', function() {
        this.playerView.setSong(model.get('currentSong'));
        wavesurfer.toggleMute();
        wavesurfer.play();
      }.bind(this));
    }, this);
  },

  render: function() {
    return this.$el.html([
      this.visualizerView.$el,
      this.playerView.$el,
      this.searchView.$el,
      this.libraryView.$el,
      this.songQueueView.$el
    ]);
  }

});
