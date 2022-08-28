const LoginRouter = require('./login');
const UserRouter = require('./user');

module.exports = (app) => {
   app.use('/login', LoginRouter);
   app.use('/user', UserRouter);
};