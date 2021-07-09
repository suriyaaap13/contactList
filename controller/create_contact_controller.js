const Contact = require('../models/contacts');

module.exports.createContact = function(req,res){
    
    // for(let i of Contact){
    //     console.log(i);
    // }


    // console.log("The input :"+req);
    Contact.create({
        name: req.body.name,
        phone: req.body.phone
    },function(err,newContact){
        if(err){
            console.log("error: ",err);
            return;
        }
        console.log('********',newContact);
        return res.redirect('back');
    });


}