const express = require('express');
const { postUser } = require('../controllers/user/postUser');

const { getUsers } = require('../controllers/user/getUsers');
const { updateUser } = require('../controllers/user/updateUser');
const { deleteUser } = require('../controllers/user/deleteUser');
const { user_validator } = require('../validators/user_validator');

let multer = require('multer');

let formdata = multer();

const router = express.Router();

//localhost:3000/api/users
router.get("/users", getUsers);
//localhost:3000/api/create-user
router.post('/create-user',[formdata.fields([])],user_validator, postUser)
//localhost:3000/api/update-user
router.post('/update-user', updateUser)
//localhost:3000/api/delete-user
router.post('/delete-user', deleteUser)

module.exports = router;