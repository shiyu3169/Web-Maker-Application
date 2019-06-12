const mongoose = require('mongoose');

const UserSchema = mongoose.Schema(
  {
    username: String,
    password: String,
    firstName: { type: String, default: '' },
    lastName: { type: String, default: '' },
    email: { type: String, default: '' },
    dateCreated: { type: Date, default: Date.now },
    role: { type: String, enum: ['admin', 'regular'], default: 'regular' }
  },
  { collection: 'user' }
);

module.exports = UserSchema;
