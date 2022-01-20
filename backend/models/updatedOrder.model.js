const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const orderWithUrlSchema = new Schema({
  Name: {
    type: String,
    required: true,
    trim: true,
    minlength: 3
  },
  Address: {
    type: String,
    required: true,
    trim: true,
    minlength: 3
  },
  Item_Name: {
    type: String,
    required: true,
    trim: true,
    minlength: 3
  },
  Item_Price: {
    type: Number,
    required: true
  },
  Item_Size: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
    maxlength: 1
  },
  SHIPPING_URL: {
    type: String,
    required: true,
    trim: true,
    minlength: 3
  },
}, {
  timestamps: true,
});

const OrderWithUrl = mongoose.model('OrderWithURL', orderWithUrlSchema);

module.exports = OrderWithUrl;