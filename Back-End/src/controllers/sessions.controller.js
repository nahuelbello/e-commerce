import { userSignUpDTO, userLogInDTO } from './dto/usersDTO.js'


// Proceso de signup.
export const signUpController = (req, res, next) => {
    const user = userSignUpDTO(req.body);
    if (user.error) return res.status(500).send(user);
    req.body = user;
    return next();
};


// Proceso de login.
export const logInController = (req, res, next) => {
    const user = userLogInDTO(req.body);
    if (user.error) return res.status(500).send(user);
    req.body = user;
    return next();
};


// Cierra la sesion.
export const logOutController = (req, res) => {
    req.session.destroy(err => {
        if (err) res.status(401).send(err);
        res.redirect('/');
    });
};
