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
    this.on('dequeue', function() {
      this.remove(this.at(0));
    });
    this.on('ended', function() {
      this.at(0).dequeue();
      if (this.length > 0) {
        this.playFirst();
      }
      // this.remove();
    });
  },
  playFirst: function() {
    this.at(0).play();
    // this.at(0).ended();
  },
  // eQListner: function() {
  //   this.model.on('dequeue', function() {
  //     console.log("meow");
  //   });
  // }
});