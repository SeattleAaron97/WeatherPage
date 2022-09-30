const express = require('express');
const app = express();
const path = require('path');

const port = 3000;

// View engine setup
//app.set('view engine', 'html');

app.get('/', (req,res) => {
    //res.render('index');
    res.sendFile(path.join(__dirname+'/index.html'));

});



app.listen(port, () => {
    console.log('listening!');
})