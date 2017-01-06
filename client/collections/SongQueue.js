// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({
  //we will set the song queue to be an extention of the Songs collection ==> no need to set the model to the SongModel, it is inherited
  // model: SongModel,

  initialize: function() {
    //enqueue invoked by 'add' event, which then invokes "play "
    this.on('add', this.enqueue, this);
    this.on('ended', this.playNext, this);
    this.on('dequeue', this.dequeue, this);
  },


  enqueue: function(song) {
    if (this.length === 1) {
      this.playFirst();
    }
  },
  dequeue: function(song) {
    //if the first item in the queue is the song model that emitted dequeue
    if(this.at(0) === song) {
      //play next song
      this.playNext();
    } else {
      //if not at the front of the queue, remove the song
      this.remove(song);
    }
  },

  playNext: function() {
    //remove an item
    this.shift();
    // if the song queue is at least one item
    if(this.length >= 1) {
      //play that item
      this.playFirst();
    } else {
      //otherwise yell STOP!
      this.trigger('stop');
    }
  },

  playFirst: function() {
    this.at(0).play();
  },

});