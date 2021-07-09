module.exports.home = function(req,res){

    const contact = require('../models/contacts');

    contact.find({},function(err,newContact){
        if(err){
            console.log('Error',err);
            return;
        }
        return res.render('home',{
            title: "Contacts",
            contact_list: newContact
        });
    });


}

//module.exports.actionName = function(req,res){}