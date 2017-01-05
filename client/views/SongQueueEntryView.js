// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here!
  tagName: 'tr',
  //underscore.js method <%=---%> key --> value
  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  render: function() {
    console.log('SongQueueEntryView .render not yet implemented');
  }
});
