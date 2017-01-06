// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<audio controls autoplay />',

  initialize: function() {
    ///////////////////////////////////////////////////
    var song = this;

    this.$el.on('ended', function() {
      song.model.dequeue();
    });
    // this.on('dequeue', function() {
    //   console.log('dequeue was triggered')
    //   this.setSong(this.at(0));
    // });
    ///////////////////////////////////////////////////
  },

  setSong: function(song) {
    this.model = song;
    this.render();
  },

  render: function() {
    console.log(this.model, "model pv render")
    return this.$el.attr('src', this.model ? this.model.get('url') : '');
  }

});
