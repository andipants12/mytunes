// App.js - Defines a backbone model class for the whole app.
var AppModel = Backbone.Model.extend({

  initialize: function(params) {
    this.set('currentSong', new SongModel());
    this.set('songQueue', new SongQueue());
    console.log(this.get('songQueue'))

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
      console.log(this.get('songQueue').length, "before EQ");

      // var addition = new SongQueue(this.get('songQueue').add(song));
      this.get('songQueue').add(song);
      console.log(this.get('songQueue').length, "after EQ");
    }, this);
      //get the songqueue
        //.add the song that was clicked

    params.library.on('dequeue', function(song) {
      console.log(this.get('songQueue').length, "before");
      this.get('songQueue').remove(song.id);
      console.log(this.get('songQueue').length, "after");
      // this.set('songQueue', removed);
    }, this);
  }

});
