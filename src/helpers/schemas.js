const Joi = require('joi');

const loginSchema = Joi.object({
    email: Joi.string().email().required().messages({
        'string.empty': 'Some required fields are missing',
    }),
    password: Joi.string().required().messages({
        'string.empty': 'Some required fields are missing',
    }),
});

const userSchema = Joi.object({
    displayName: Joi.string().min(8).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    image: Joi.string().required(),
});

const categorySchema = Joi.object({
    name: Joi.string().required(),
});

const blogPostSchema = Joi.object({
    title: Joi.string().not().empty().required(),
    content: Joi.string().not().empty().required(),
    categoryIds: Joi.array().items(
        Joi.number().required()).min(1).required(),
});

module.exports = {
    loginSchema,
    userSchema,
    categorySchema,
    blogPostSchema,
};