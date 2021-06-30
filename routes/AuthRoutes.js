const router = require('express').Router();


//importar controladores
const UserController = require('./../controllers/UserController');

router.post('/register', UserController.register);

module.exports = router;
