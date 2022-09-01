const LoginRouter = require('./login');
const UserRouter = require('./user');
const CategoriesRouter = require('./category');
const PostRouter = require('./post');

module.exports = (app) => {
   app.use('/login', LoginRouter);
   app.use('/user', UserRouter);
   app.use('/categories', CategoriesRouter);
   app.use('/post', PostRouter);
};