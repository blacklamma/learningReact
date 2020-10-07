const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const itemSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: false },
  addition_date: { type: Date, required: Date.now() },
  is_deleted: { type: Boolean, required: true, default: false },
  children: { type: Array, required: false, default: [] },
  price: { type: Number, required: true },
}, {
  timestamps: true,
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;