const Schemas = require("./schemas")

const validateLoginBody = (body) => {
    const { error } = Schemas.loginSchema.validate(body);
    if (error) {
        const err = new Error(error.details[0].message);
        err.statusCode = 400;
        throw err;
    }
};

module.exports = validateLoginBody;