// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here!
  tagName: 'tr',
  //underscore.js method <%=---%> key --> value
  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),
  //may not need:
  events: {
    //when a dom element in the sqv is clicked, dequeue it
    'click': function() {
      this.model.dequeue();
    }
  },

  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  }

});
