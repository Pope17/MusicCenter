const validationResult = require('express-validator');
const bcryptjs = require('bcryptjs');
const User = require('../dataBase/models/user');
const db = require ('../dataBase/models')



const userControllers = {
    register: (req, res) => {
        db.user.create({
			nombre: req.body.nombre,
			apellido: req.body.apellido,
			contraseña: req.body.contraseña,
		});
        return res.render('userRegisterForm');
    },
    processRegister: (req, res) => {
        const resultValidation = validationResult(req);

        if (resultValidation.errors.length>0) {
            return res.render('userRegisterForm', {
                errors: resultValidation.mapped(),
                oldData: req.body
            });
        }
 /// valida la no repeticion de mail
 return res.send('Ok, las validaciones se pasaron y no tienes errores');

    const userInDb = User.findByField('email', req.body.email);

        return res.send(userInDb);
        if (userInDb) {
            return res.render('userRegisterForm', {
                errors: {
                    email: {
                        msg: 'Este mail ya está registrado'
                    }
            },
             oldData: req.body
            }); 
        }

             //crea usuario

        let userToCreate = {
            ...req.body,
            password: bcryptjs.hashsync(req.body.password, 10),
            avatar: req.file.filename
        }

        let userCreated = User.create(req.body);
        return res.redirect('/user/login');

    },
    login: (req, res) => {
        return res.render('userLoginForm');
    },
    loginProcess: (req, res) => {
        let userToLogin = User.findByField('email', req.body.email);

        if (userToLogin) {
            let isOkThePassword = User.findByField('email', req.body.email);
            if (isOkThePassword) {
                delete userToLogion.password;
                req.session.userLogged = userToLogin;

                if(req.body.recordar) {
                    req.cookie('userEmail', req.body.email, { maxAge: 1000 * 120 })
                }

                return res.redirect('/user/profile');
            }
        }

        return res.render('userLoginForm', {
            errors: {
                email: {
                    msg: "Sus credenciales no son correctas"
                }
            }
        })
    },
    profile: (req, res) => {
        return res.render('userProfile', {
            user: req.session.userLogged
        })
    
    },
    logout: (req, res) => {
        res.clearCookie('userEmail');
    req.session.destroy();
    return res.redirect('/');
    },
}

module.exports = userControllers;
