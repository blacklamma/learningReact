const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: false },
  email_id: { type: String, required: true},
  mobile_no: { type: String, required: true},
  password: { type: String, required: true},
  addition_date: { type: Date, required: Date.now() },
  is_deleted: { type: Boolean, required: true, default: false },
}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;