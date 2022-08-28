const { verifyToken } = require('../helpers/token');

const validateToken = (req, _res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        const err = new Error('Token not found');
        err.statusCode = 401;
        throw err;
    }

    try {
        const user = verifyToken(token);

        req.user = user;
        next();
    } catch (error) {
        const err = new Error('Expired or invalid token');
        err.statusCode = 401;
        throw err;
    }
}

module.exports = { validateToken };