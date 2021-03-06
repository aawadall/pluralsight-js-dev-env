import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

/* eslint-disable no-console */

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

// Routing
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.get('/users', (req, res) => {
    // Hardcoded for simplicity, mock database
    res.json([
        {"id": 1, "firstName": "Ahmed", "lastName": "Awadallah", "email": "aawadall@ualberta.ca"},
        {"id": 2, "firstName": "Rehab", "lastName": "Farid", "email": "rehabfar@gmail.com"},
        {"id": 3, "firstName": "Hamza", "lastName": "Awadallah"},
        {"id": 4, "firstName": "Zayd",  "lastName": "Awadallah"}
    ]);
});
// Listening to port
app.listen(port, (err) => {
   if(err){
       console.log(err);
   } else {
       open('http://localhost:'+port);
   }
});