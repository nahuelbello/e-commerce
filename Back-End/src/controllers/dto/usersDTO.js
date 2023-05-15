const toUpperCamelCase = (string) => {
    const wordsArray = string.toLowerCase().split(" ");
    for (let i = 0; i < wordsArray.length; i++) {
        wordsArray[i] = wordsArray[i][0].toUpperCase() + wordsArray[i].substr(1);
    }
    return wordsArray.join(" ");
}

export const userSignUpDTO = (user) => {
    const message = {};
    if (!user.first_name) message.first_name = "El nombre es obligatorio";
    if (!user.last_name) message.last_name = "El apellido es obligatorio";
    if (!user.email) message.email = "El E-mail es obligatorio";
    if (!user.password) message.password = "La contraseña es obligatoria";
    
    if (Object.keys(message).length !== 0) return { error: true, message };

    return {
        first_name: toUpperCamelCase(user.first_name),
        last_name: toUpperCamelCase(user.last_name),
        email: user.email.toLowerCase(),
        password: user.password,
        age: user.age
    };
}

export const userLogInDTO = (user) => {
    const message = {};
    if (!user.email) message.email = "El E-mail es obligatorio";
    if (!user.password) message.password = "La contraseña es obligatoria";

    if (Object.keys(message).length !== 0) return { error: true, message };
    
    return {
        email: user.email.toLowerCase(),
        password: user.password.toLowerCase()
    };
}
