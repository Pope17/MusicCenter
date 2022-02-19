const path = require('path');
const { body } = require('express-validator');

module.exports = [
    body('fullname').notEmpty().withMessage('Tiene que escribir un nombre'),
    body('email') 
        .notEmpty().withMessage('Tiene que  escribir correo electrónico').bail()
        .isEmail().withMessage('Debe escribir un formato de email correcto'),
        body ('password').notEmpty().withMessage('Tiene que escribir una contraseña'),
        body ('country').notEmpty().withMessage('Tiene que escribir su país'),
        body ('avatar').custom((value, {req}) => {
            let file = req.file;
            let acceptedExtensions = ['.jpg', '.png', '.gif'];
            if (!file) {
                throw new Error('Tiene que subir una imagen')
            } else {
                let fileExtension = path.extname(file.originalname);
                if (!acceptedExtensions.includes(fileExtension)) {
                    throw new Error(`Las extensiones de archivos permitidas son ${acceptedExtensions.join(', ')}`);
                }
            }
            return true;
        })
]