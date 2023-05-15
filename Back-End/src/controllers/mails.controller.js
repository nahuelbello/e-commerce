import transport from '../config/nodemailer/nodemailer.config.js';


const createOrderMail = async (req, res) => {
    await transport.sendMail({
        from: `Nahuel Bello`,
        to: 'nahuel.bello@gmail.com',
        subject: 'correo de prueba',
        html: `
        <div>
            <h1>Titulo</h1>
        </div>
        `,
        attachments:[]
    });
};


export default createOrderMail;
