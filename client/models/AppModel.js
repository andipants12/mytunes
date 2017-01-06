 // App.js - Defines a backbone model class for the whole app.
var AppModel = Backbone.Model.extend({

  initialize: function(params) {
    this.set('currentSong', new SongModel());
    this.set('songQueue', new SongQueue());

    /* Note that 'this' is passed as the third argument. That third argument is
    the context. The 'play' handler will always be bound to that context we pass in.
    In this example, we're binding it to the App. This is helpful because otherwise
    the 'this' we use that's actually in the function (this.set('currentSong', song)) would
    end up referring to the window. That's just what happens with all JS events. The handlers end up
    getting called from the window (unless we override it, as we do here). */


    params.library.on('play', function(song) {
      this.set('currentSong', song);
    }, this);

    // params.library.on('ended', function() {
    //   console.log('pleaaase work!');
    // });

    //listen for enqueue on the lib
    params.library.on('enqueue', function(song) {
      // var addition = new SongQueue(this.get('songQueue').add(song));
      this.get('songQueue').add(song);
    }, this);
      //get the songqueue
        //.add the song that was clicked

    //when stop is triggered on song queue
    this.get('songQueue').on('stop', function() {
      //set the current song valuje of the app model to null ===> nothing is playing meow
      this.set('currentSong', null);
    }, this);
  }

});
