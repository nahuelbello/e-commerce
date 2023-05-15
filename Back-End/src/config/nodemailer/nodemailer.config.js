import { createTransport } from 'nodemailer';
import config from '../config.js';


const transport = createTransport({
    service: 'gmail',
    port: 587,
    auth: {
        user: config.mails.user,
        pass: config.mails.pass
    }
});

export default transport;
