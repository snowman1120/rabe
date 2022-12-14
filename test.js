const axios = require('axios')
const stripe = require('stripe')("sk_test_51LvgXwL1HlGOcXfCb05PFJ66YycNyAoMyV9xSEnylHw32zNHjOwYcUbhvQ6UxFzrHm7IlsL6grlgiIHF2c8sF7l000Db9A6Yd9");

async function getBalance () {
    const balance = await stripe.balance.retrieve();
    //console.log(balance)

    const rate = await axios.get('https://api.exchangerate-api.com/v4/latest/USD');
    
    console.log(rate.data.rates['CAD']);
    console.log('cad'.toUpperCase())
    
}

getBalance();