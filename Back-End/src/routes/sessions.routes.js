import { Router } from 'express';
import passport from 'passport';
import { isAuthenticated } from '../middlewares/auth.middleware.js';
import { signUpController, logInController, logOutController } from '../controllers/sessions.controller.js';


const sessionsRouter = Router();


sessionsRouter.post('/signup', signUpController, (req,res,next) => {
    passport.authenticate('local-signup', async (error, user , message) => {
        if (message) {
            return res.send(message);
        }
        if (user) {
            try {
                return res.send({ error: false, user });
            }
            catch (error) {
                return res.send({ message: error.message });
            }
        }
    }) (req, res, next);
}); 
  

// Proceso de login.
sessionsRouter.post('/login', logInController, (req,res,next) => {
    passport.authenticate('local-login', async (error, user , message) => {
        if (message) {
            return res.send(message);
        }
        if (user) {
            try {
                return res.send({ error: false, user });
            }
            catch (error) {
                return res.send({ message: error.message });
            }
        }
    }) (req, res, next);
}); 


// Cierra la sesion.
sessionsRouter.get('/logout', logOutController);


export default sessionsRouter;
