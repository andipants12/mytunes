// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  // length: this.set('length', this.length),
  initialize: function() {
    // console.log(this.length, "initialize");
    // this.playFirst();
    this.on('add', function() {
      if (this.length === 1) {
        this.playFirst();
      }
    });
  },
  playFirst: function() {
    console.log("meow?")
  }
});