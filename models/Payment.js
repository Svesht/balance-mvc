const mongoose = require('mongoose')

const PaymentSchema = new mongoose.Schema({
  paymentDecription: {
    type: String,
    required: true,
  },
  paymentDate: {
    type: String,
    required: true,
  }
})

module.exports = mongoose.model('Payment', PaymentSchema)
