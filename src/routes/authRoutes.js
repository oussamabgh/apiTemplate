const express = require('express');
const { validateBody } = require('../middleware/validator');
const authController = require('../controllers/authController');
const { schemas } = require('../validators/authValidators');

const router = express.Router();

router.post('/register', validateBody(schemas.register), authController.register);
router.post('/login', validateBody(schemas.login), authController.login);

module.exports = router;
