const express = require('express');
const router = express.Router();

var delete_contact_controller = require('../controller/delete_contact_controller');

router.get('/',delete_contact_controller.deleteContact);

module.exports = router;