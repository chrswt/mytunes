var VisualizerView = Backbone.View.extend({
  tagName: 'div',
  className: 'visualizer',
  // template: _.template(''),

  initialize: function() {
    this.render();
  },

  render: function() {
    var wavesurfer = WaveSurfer.create({
      container: '.visualizer',
      waveColor: 'violet',
      progressColor: 'purple',
      barWidth: 3
    });
    
  }
});