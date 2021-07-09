const express = require('express');

const router = express.Router();

const homeController = require('../controller/home_controller');
const createContactController = require('../controller/create_contact_controller');


// console.log('router loaded');

router.get('/',homeController.home);
router.use('/create-contact',require('./create-contact'));
router.use('/delete-contact',require('./delete-contact'));

module.exports = router;

//The delete work fine though try it as well ok
