const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');
const axios = require('axios');

// This is a public sample test API key.
// Don’t submit any personally identifiable information in requests made with this key.
// Sign in to see your own test API key embedded in code samples.
const stripe = require("stripe")('sk_test_51LvgXwL1HlGOcXfCb05PFJ66YycNyAoMyV9xSEnylHw32zNHjOwYcUbhvQ6UxFzrHm7IlsL6grlgiIHF2c8sF7l000Db9A6Yd9');
const calculateOrderAmount = (items) => {
    // Replace this constant with a calculation of the order's amount
    // Calculate the order total on the server to prevent
    // people from directly manipulating the amount on the client
    return 8999;
};

router.post("/create-payment-intent", async (req, res) => {
    const { items } = req.body;
  
    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: calculateOrderAmount(items),
      currency: "usd",
      automatic_payment_methods: {
        enabled: true,
      },
    });
  
    res.send({
      clientSecret: paymentIntent.client_secret,
    });
});

router.get('/get-balance', async (req, res) => {
    let balance = await stripe.balance.retrieve();
    balance = balance.available[0];

    const rate = await axios.get('https://api.exchangerate-api.com/v4/latest/USD');
    const rates = rate.data.rates;

    balance.amount /= rates[balance.currency.toUpperCase()];
    res.json(balance);
});

module.exports = router;