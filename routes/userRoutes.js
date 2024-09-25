const express = require('express');
const { body } = require('express-validator');

const { getUsers } = require("../controllers/getUsers");
const { postUser } = require("../controllers/postUser");
const { updateUser } = require('../controllers/updateUser');
const { deleteUser } = require('../controllers/deleteUser');
const { user_validator } = require('../validators/user_validator');

const router = express.Router();
//localhost:3000/api/users
router.get("/users", getUsers);
//localhost:3000/api/create-user
router.post('/create-user', user_validator, postUser)
//localhost:3000/api/update-user
router.post('/update-user', updateUser)
//localhost:3000/api/delete-user
router.post('/delete-user', deleteUser)

//TODO: Retornar los correos de todos los usuario
//router.post('/users-emails', )

//TODO:  Retorne los nombres que empiecen con f
//router.post('/users-start-f', )

module.exports = router;