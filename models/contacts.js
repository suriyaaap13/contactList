const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    phone: {
        type: Number,
        // validate:{
        //     validator: function(v){
        //         return /d{10}/.test(v);
        //     },
        //     message: '{VALUE} is not a valid 10 digit number!'
        // }
        required: true
    }
});

const Contact = mongoose.model('Contact',contactSchema);

module.exports = Contact;

//create  contact again