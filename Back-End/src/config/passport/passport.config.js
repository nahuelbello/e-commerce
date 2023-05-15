import bcrypt from 'bcrypt';
import passport from 'passport';
import passportLocal from 'passport-local';
import userModel from '../../models/user.model.js';


const encryptPassword = (password) => { return bcrypt.hashSync(password, bcrypt.genSaltSync(10)) };
const comparePassword = (user, password) => { return bcrypt.compareSync(password, user.password) };

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));


const initializePassport = () => {
    passport.use('local-signup', new passportLocal.Strategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
    }, async (req, email, password, done) => {
        try {
            const userExists = await userModel.findOne({ 'email': req.body.email });
            if (userExists) {
                return done(null, false, { error: true, message: 'El E-mail ya existe' });
            }
            
            const newUser = new userModel(req.body);
            newUser.password = encryptPassword(newUser.password);
            await newUser.save();
            done(null, newUser);
        } catch (err) {
            done(err);
        }
    }));

    passport.use('local-login', new passportLocal.Strategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
    }, async (req, email, password, done) => {
        try {
            const user = await userModel.findOne({ 'email': req.body.email });
            if (!user) return done(null, false, { error: true, message: 'El E-mail no está registrado' });
            if (!comparePassword(user, req.body.password)) return done(null, false, { error: true, message: 'Contraseña incorrecta' });
            done(null, user);
        } catch (err) {
            return done(err);
        }
    }));
};


export default initializePassport;
