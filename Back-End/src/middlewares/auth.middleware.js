// Verifica si ya esta autenticado.
export const isAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) return next();
    res.redirect('/api/sessions/login');
};

// Verifica si tiene rol de usuario.
export const isUser = (req, res, next) => {
    if (req.user.role === 'user') return next();
    res.redirect('/');
};

// Verifica si tiene rol de admin.
export const isAdmin = (req, res, next) => {
    console.log(req.user)
    if (req.user.role === 'admin') return next();
    res.redirect('/');
};
