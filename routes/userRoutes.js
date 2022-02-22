const express = require('express');
const app = express();
const router = express.Router();
const multer = require('multer');
const { body } = require('express-validator');



//controllers
const usersControllers = require ('../controllers/userControllers.js');
const uploadFile = require('../middlewares/multerMiddlewares.js');
const validation = require('../middlewares/validationRegisterMiddlewares.js');
const guestMiddleware = require('../middlewares/guestMiddleware.js');
const authMiddleware = require('../middlewares/authMiddleware.js');
//Formulario de registro 
 
router.get('./register', guestMiddleware, usersControllers.register);

//Procesar y validar el registro 


const validaciones = [
    body('nombre').notEmpty().withMessage('Debes escribir tu nombre'),
    body('apellido').notEmpty().withMessage('Debes escribir tu apellido'),
    body('email').notEmpty().withMessage('Debes escribir un correo electrónico válido'),
    body('contraseña').isEmail().withMessage('Debes escribir tu contraseña'),
];

router.post('/register', uploadFile.single('avatars'), validaciones, usersControllers.processRegister);

//Formulario de Login

router.get('/login', usersControllers.login);

//Procesa el Login

router.post('/login', usersControllers.loginProcess);

//Perfil de usuario

router.get('/profile', authMiddleware, usersControllers.profile);

//Logout

router.get('/logout', authMiddleware, usersControllers.logout);

module.exports = router;
