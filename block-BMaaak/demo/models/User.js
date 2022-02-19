var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema(
  {
    name: { type: String },
    username: { type: String },
    email: { type: String },
    address: {
      city: { type: String },
      state: { type: String ,unique : true },
      country: { type: String ,unique : true},
      pin: { type: Number },
    },
  },
  { timestamps: true }
);
userSchema.index({ username: -1, unique: true });
userSchema.index({ email: -1, unique: true });
userSchema.index({'address.country' : -1, 'address.state' :-1  });

module.exports = mongoose.model('User', userSchema);