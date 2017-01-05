// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: 'table',

  initialize: function() {
    this.render();

  },

  render: function() {
    // return this.$el;
    this.$el.children().detach();

    this.$el.html('<th>Song Queue</th>').append(
      this.collection.map(function(song) {
        return new SongQueueEntryView({model: song}).render();
      })
    );

    //from library view, DELTE ME SOON
    // this.$el.children().detach();

    // this.$el.html('<th>Library</th>').append(
    //   this.collection.map(function(song) {
    //     return new LibraryEntryView({model: song}).render();
    //   })
    // );
  }

});
