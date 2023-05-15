import mongoose from 'mongoose';
import config from '../config/config.js';


mongoose.set('strictQuery', false);
mongoose.connect(config.mongoDB.url,
    { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
        if (err) {
            console.log("No se pudo conectar a la base de datos");
        } else {
            console.log("Conectado a la base de datos");
        };
});
