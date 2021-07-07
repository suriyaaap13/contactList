const express = require('express');

const router = express.Router();

const homeController = require('../controller/home_controller');
const createContactController = require('../controller/create_contact_controller');


console.log('router loaded');

router.get('/',homeController.home);
router.use('/create-contact',require('./create_contact'));
router.use('/delete-contact',require('./delete_contact'));

module.exports = router;