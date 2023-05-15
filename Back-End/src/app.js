// Libraries - Frameworks
import cors from 'cors';
import express from 'express';
import cookieParser from 'cookie-parser';

// Routers
import sessionsRouter from './routes/sessions.routes.js';
import productsRouter from './routes/products.routes.js';

// Passport
import passport from 'passport';
import initializePassport from './config/passport/passport.config.js';

// Sessions
import session from 'express-session';
import MongoStore from 'connect-mongo';

// Config
import config from './config/config.js';

// Database
import './database/mongoDB.js'


// Server
const app = express();
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor escuchando en http://localhost:${PORT}`));


// Middlewares
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
        mongoUrl: config.mongoDB.url,
        mongoOptions: { useNewUrlParser: true, useUnifiedTopology: true },
        ttl: 1000
    }),
}));
initializePassport();
app.use(passport.initialize());
app.use(passport.session());


// Routes
app.use('/api/products', productsRouter);
app.use('/api/sessions', sessionsRouter);
