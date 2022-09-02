const tokenHelper = require('../helpers/token');
const { User } = require('../database/models');

const create = async (user) => {
    const { email } = user;
    const exists = await User.findOne({ where: { email } });

    if (exists) {
        const err = new Error('User already registered');
        err.statusCode = 409;
        throw err;
    }

    const result = await User.create(user);
   
    const token = tokenHelper.createToken({ id: result.id });
    return token;
}

const getAll = async () => {
    const users = await User.findAll({ attributes: { exclude:
        ['password'] }});
    return users;
}

const getById = async (id) => {
    const user = await User.findOne({ where: { id }, attributes: {
        exclude: ['password'] }});
    
    if (!user) {
        const err = new Error('User does not exist');
        err.statusCode = 404;
        throw err;
    }
    return user;
}

const destroy = async (id) =>
  User.destroy({ where: { id } });

module.exports = {
    create,
    getAll,
    getById,
    destroy,
};