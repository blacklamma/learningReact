const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const basketSchema = new Schema({
    user: {type: mongoose.Schema.ObjectId, ref: 'User'},
    items: [{type: mongoose.Schema.ObjectId, ref: 'Item'}],
    is_deleted: { type: Boolean, required: true, default: false },
}, {
  timestamps: true,
});

const Basket = mongoose.model('Order', basketSchema);

module.exports = Basket;