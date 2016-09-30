var VisualizerView = Backbone.View.extend({
  
  tagName: 'div',

  className: 'visualizer',

  initialize: function() {
    this.render();

    $(function() {
      $('#player').on('pause', function() {
        wavesurfer.pause();
      });
      $('#player').on('play', function() {
        wavesurfer.play();
      });
      $('#player').on('timeupdate', function() {
        wavesurfer.seekTo(this.currentTime / this.duration);
      });
    });
  },

  render: function() {
    wavesurfer = WaveSurfer.create({
      container: '#waveform',
      waveColor: 'lightgrey',
      progressColor: 'orange',
      barWidth: 4,
      interact: false
    });

  }
});
