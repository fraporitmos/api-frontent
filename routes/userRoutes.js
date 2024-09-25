const express = require('express');
const { body } = require('express-validator');

const { getUsers } = require("../controllers/getUsers");
const { postUser } = require("../controllers/postUser");
const { updateUser } = require('../controllers/updateUser');
const { deleteUser } = require('../controllers/deleteUser');
const { user_validator } = require('../validators/user_validator');

const router = express.Router();

module.exports = router;