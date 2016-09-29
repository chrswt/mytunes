var SearchView = Backbone.View.extend({ 

  tagName: 'span',

  template: _.template('<button class="search">Search</search>'),

  initialize: function() {
    this.render();
  },

  events: {
    'click': function() {
      this.collection.fetch();
    }
  },

  render: function() {
    return this.$el.html(this.template());
  }

});
