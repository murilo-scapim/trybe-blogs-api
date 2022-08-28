const tokenHelper = require('../helpers/token');
const { User } = require('../database/models')

const login = async ({ email, password }) => {
    const user = await User.findOne({ where: { email, password } });

    if (!user) {
        const err = new Error('Invalid fields');
        err.statusCode = 400;
        throw err;
    }
   
    const token = tokenHelper.createToken({ id: user.id });
    return token;
}

module.exports = { login };