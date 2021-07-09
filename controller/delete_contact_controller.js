module.exports.deleteContact = function(req,res){
    const Contacts = require('../models/contacts');
    let id = req.query.id;
    Contacts.findByIdAndDelete(id,function(err){
        if(err){
            console.log('error has occured:',err);
            return;
        }
        return res.redirect('back');
    });
}