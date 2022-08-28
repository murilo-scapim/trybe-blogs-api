const { application } = require('express');
const express = require('express');

const LoginRouter = require('./login');

const router = express.Router();

router.use('/login', LoginRouter);

module.exports = router;