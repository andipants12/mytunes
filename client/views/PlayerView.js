// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<audio controls autoplay />',

  initialize: function() {
    this.$el.on('ended', (function() { this.model.ended() }).bind(this));

  },

  setSong: function(song) {
    this.model = song;
    if(!this.model) {
      this.el.pause();
    }
    this.render();
  },

  render: function() {
    //when the src attribute is set to an empty string ==> causes the player to STOP!
    return this.$el.attr('src', this.model ? this.model.get('url') : '');
  }

});
