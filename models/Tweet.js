var mongoose = require('../config/db');
var Schema = mongoose.Schema;

var tweetSchema = new Schema({
  tweet: String,
  user: {type: Schema.Types.ObjectId, ref: 'User' },
  created_at: { type: Date, default: Date.now() }
});

tweetSchema.statics.getTimeline = function(cb) {
  return Tweet.find({})
        .sort({created_at: -1})
        .populate({path:'user', select:'username'})
        .exec(cb);
}

tweetSchema.statics.getPersonalTimeline = function(id, cb) {
  return Tweet.find({user: id})
        .sort({created_at: -1})
        .populate({path:'user', select:'username'})
        .exec(cb);
}

var Tweet = mongoose.model('Tweet', tweetSchema);

module.exports = Tweet;
