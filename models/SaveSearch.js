const mongoose = require('mongoose');

const SaveSearchSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  },
  createdAt: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  tweetURL: Array,
  type: {
    type: String,
    required: true
  },
  twitterUser: {
    id: Number,
    id_str: String,
    name: String,
    screen_name: String,
    location: String,
    description: String,
    url: String,
    entities: {
      url: {
        urls: Array
      },
      description: {
        urls: Array
      }
    },
    protected: Boolean,
    followers_count: Number,
    friends_count: Number,
    listed_count: Number,
    created_at: String,
    favourites_count: Number,
    utc_offset: String,
    time_zone: String,
    geo_enabled: Boolean,
    verified: Boolean,
    statuses_count: Number,
    lang: String,
    contributors_enabled: Boolean,
    is_translator: Boolean,
    is_translation_enabled: Boolean,
    profile_background_color: String,
    profile_background_image_url: String,
    profile_background_image_url_https: String,
    profile_background_tile: Boolean,
    profile_image_url: String,
    profile_image_url_https: String,
    profile_banner_url: String,
    profile_link_color: String,
    profile_sidebar_border_color: String,
    profile_sidebar_fill_color: String,
    profile_text_color: String,
    profile_use_background_image: Boolean,
    has_extended_profile: Boolean,
    default_profile: Boolean,
    default_profile_image: Boolean,
    following: Boolean,
    follow_request_sent: Boolean,
    notifications: Boolean,
    translator_type: String
  }
});

module.exports = mongoose.model('search', SaveSearchSchema);
