const express = require('express');
const path = require('path');
const open = require('open');

const port = 3000;

const app = express();

// Routing
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../src/index.html'));
});

// Listening to port
app.listen(port, (err) => {
   if(err){
       console.log(err);
   } else {
       open('http://localhost:'+port);
   }
});