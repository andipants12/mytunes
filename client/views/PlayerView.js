// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<audio controls autoplay />',

  initialize: function() {
    this.on('ended', function() {
      console.log('inside player view initialize');
      this.dequeue();
      // console.log(this.at(0), "this at zero player view initialize")
      // this.setSong(this.at(0));
    });
    this.on('dequeue', function() {
      console.log('dequeue was triggered')
      this.setSong(this.at(0));
    });
  },

  setSong: function(song) {
    this.model = song;
    this.render();
  },

  render: function() {
    return this.$el.attr('src', this.model ? this.model.get('url') : '');
  }

});
