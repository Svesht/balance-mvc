const Payment = require('../models/Payment');

module.exports = {
    getPayments: async (req,res) => {
        try{
            const payments = await Payment.find();
            const sumTotal = payments.reduce((sum, cur) => sum + cur, 0);
            res.render('balance.ejs', {payments, sumTotal});
        } catch(err) {
            console.log(err);
        }
    },
    createPayment: async (req, res) => {
        try {
            await Payment.create({paymentDescription: req.body.paymentDescription, paymentDate: req.body.paymentDate.toString()});
            console.log('Payment has been added!');
            res.redirect('/balance');
        } catch(err) {
            console.log(err);
        }
    },
    deletePayment: async (req, res) => {
        console.log(req.body.paymentIdFromJSFile);
        try{
            await Payment.findOneAndDelete({_id: req.body.paymentIdFromJSFile});
            console.log('Deleted Payment');
            res.json('Deleted It');
        }catch(err){
            console.log(err);
        }
    }
}    