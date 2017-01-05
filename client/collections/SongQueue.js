// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {

    //enqueue
    this.on('enqueue', function() {
      console.log(this, "SQ enqueue");
      // this.add(this.model);
    });

    this.on('add', function() {
      this.at(0).enqueue();
      if (this.length === 1) {
        this.playFirst();
      }
    });

    //dequeue
    this.on('dequeue', function() {
      this.remove(this.at(0));
    });
    this.on('ended', function() {
      this.at(0).dequeue();
      if (this.length > 0) {
        this.playFirst();
      }
    });
  },

  playFirst: function() {
    this.at(0).play();
  },

});