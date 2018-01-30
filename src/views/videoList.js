var VideoListView = Backbone.View.extend({

  initialize: function() {
    this.collection.on('sync', this.render, this);
  },

  render: function() {
    this.$el.children('.video-list').children().detach();
    this.collection.forEach(this.renderVideos, this);
    this.$el.html(this.template());
    return this;
  },

  renderVideos: function(video) {
    var videoListEntryView = new VideoListEntryView({model: video});
    this.$('.video-list').append(videoListEntryView.render());
  },

  template: templateURL('src/templates/videoList.html')

});
