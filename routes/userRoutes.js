const express = require('express');
const app = express();
const router = express.Router();

//controllers
const userControllers = require ('../controllers/userControllers.js');
const uploadFile = require('../middlewares/multerMiddlewares.js');
const validation = require('../middlewares/validationRegisterMiddlewares.js');
const guestMiddleware = require('../middlewares/guestMiddleware.js');
const authMiddleware = require('../middlewares/authMiddleware.js');
//Formulario de registro 
 
router.get('./register', guestMiddleware, userControllers.register);

//Procesar el registro

router.post('./register', uploadFile.single('avatars'), validation, userControllers.processRegister);

//Formulario de Login

router.get('./login', userControllers.login);

//Procesa el Login

router.post('./login', userControllers.loginProcess);

//Perfil de usuario

router.get('./profile', authMiddleware, userControllers.profile);

//Logout

router.get('./logout', authMiddleware, userControllers.logout);

module.exports = router;
