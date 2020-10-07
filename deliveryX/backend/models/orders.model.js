const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const orderSchema = new Schema({
    user: {type: mongoose.Schema.ObjectId, ref: 'User'},
    basket: {type: mongoose.Schema.ObjectId, ref: 'Basket'},
    is_deleted: { type: Boolean, required: true, default: false },
}, {
  timestamps: true,
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;