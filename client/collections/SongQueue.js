// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {

    this.on('add', function() {
     // this.at(0).enqueue();
      if (this.length === 1) {
        this.playFirst();
      }
    }, this);

    //dequeue
    this.on('ended', function() {
      console.log('DQ in song queue')
      this.remove(this.at(0));
      if (this.length > 0) {
        this.playFirst();
      }
    });
    // this.on('ended', function() {
    //   this.at(0).dequeue();
    //   if (this.length > 0) {
    //     this.playFirst();
    //   }
    // });
  },

  playFirst: function() {
    this.at(0).play();
  },

});