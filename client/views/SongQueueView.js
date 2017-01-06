// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: 'table',

  initialize: function() {
    //song queue view listens for add and remove event from the song queue (song added or removed)
    this.collection.on('add remove', this.render, this);
      //then render the song queue view with the updated information
    this.render();
  },

  render: function() {
    // return this.$el;
    this.$el.children().detach();

    return this.$el.html('<th>Song Queue</th>').append(
      this.collection.map(function(song) {
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }

});
