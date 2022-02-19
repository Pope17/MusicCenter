function userLoggedMiddleware(req, res, next) {
let isLogged = false;
res.locals.isLogged = false;

let emailInCookie = req.cookie.userEmail;
let userFromCookie = User.findByField('email', emailInCookie);
if (userFromCookie) {
req.session.userLogged = userFromCookie;
}
if (req.session.userLogged) {
    res.locals.isLogged = true;
}

}

module.exports = userLoggedMiddleware;
