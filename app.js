const axios = require('axios');

const express = require('express');
const app = express();
const path = require('path');


const port = 3000;

app.get('/', (req,res) => {
    //res.render('index');
    res.sendFile(path.join(__dirname+'/index.html'));
 

});

//https://api.weather.gov/points/30.2848,97.7176 //haymaker??

//https://api.weather.gov/gridpoints/TOP/31,80/forecast //???

//https://api.weather.gov/points/39.7456,-97.0892 //example req


//https://api.weather.gov/alerts/active?area=WA

console.log('above the get');
axios.get('https://api.weather.gov/alerts/active?area=WA').then(function (response) {
    console.log('successfully got?');
    console.log('more?');
    console.log(response.data.features[0].properties);
}).catch(function (error) {
    console.log('error - ', error);
})

app.listen(port, () => {
    console.log('listening!');
})