const LoginRouter = require('./login');
const UserRouter = require('./user');
const CategoriesRouter = require('./category');

module.exports = (app) => {
   app.use('/login', LoginRouter);
   app.use('/user', UserRouter);
   app.use('/categories', CategoriesRouter);
};