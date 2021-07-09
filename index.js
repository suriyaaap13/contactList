const express = require('express');
const app = express();
const port = 8000;
const db = require('./config/mongoose');
const contact = require('./models/contacts');

//Set up the view engine
app.set('view engine','ejs');
app.set('views','./views');

app.use(express.urlencoded());

//use express router
app.use('/',require('./routes'));

app.use(express.static('assets'));



app.listen(port,function(err){
    if(err){
        console.log('Error :',err);
        return;
    }
    console.log("The server is up and running in the port:",port);

});