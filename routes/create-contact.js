const express = require('express');
const router = express.Router();

const create_contact_controller = require('../controller/create_contact_controller');

router.post('/',create_contact_controller.createContact);

module.exports = router;
