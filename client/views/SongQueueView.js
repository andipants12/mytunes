// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  initialize: function() {
    this.render();
    this.collection.on('add', function() {
      console.log('there was a change!');
    })
  },
  // events: {
  //   'add': 'handleQueue'
  // },
  handleQueue: function() {
    console.log("here!");
  },
  render: function() {
    return this.$el;
  }

});
