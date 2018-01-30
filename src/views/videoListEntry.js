var VideoListEntryView = Backbone.View.extend({

  initialize: function() {
    // this.$el.on({'click:.video-list-entry-title': this.model.select.bind(this.model)});
  },

  events: {
    'click .video-list-entry-title': 'select'
  },

  select: function() {
    this.model.select();
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this.$el;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
