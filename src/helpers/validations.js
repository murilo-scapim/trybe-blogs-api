const Schemas = require("./schemas")

const validateLoginBody = (body) => {
    const { error } = Schemas.loginSchema.validate(body);
    if (error) {
        const err = new Error(error.details[0].message);
        err.statusCode = 400;
        throw err;
    }
};

const validateUserBody = (body) => {
    const { error } = Schemas.userSchema.validate(body);
    if (error) {
        const err = new Error(error.details[0].message);
        err.statusCode = 400;
        throw err;
    }
};

const validateCategoryBody = (body) => {
    const { error } = Schemas.categorySchema.validate(body);
    if (error) {
        const err = new Error(error.details[0].message);
        err.statusCode = 400;
        throw err;
    }
};

const validateBlogPostBody = (body) => {
    const { error } = Schemas.blogPostSchema.validate(body);
    if (error) {
        const err = new Error('Some required fields are missing');
        err.statusCode = 400;
        throw err;
    }
}

module.exports = {
    validateLoginBody,
    validateUserBody,
    validateCategoryBody,
    validateBlogPostBody,
};