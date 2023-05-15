import dotenv from 'dotenv';
dotenv.config();


const config = {
    fileSystem: {
        usersFileName: 'users.json',
        productsFileName: 'products.json'
    },
    mongoDB: {
        url: `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.9jlfml1.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
    },
    server: {
        port: process.env.PORT,
        sessionSecret: process.env.SESSION_SECRET
    },
    mails: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASSWORD
    }
};

export default config;
