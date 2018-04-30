import * as Joi from 'joi';

const authSchema = Joi.object().keys(
    {
        username: Joi.string().alphanum().min(3).max(120).required(),
        password: Joi.string().alphanum().min(6).max(256).required()
    }
)

export default authSchema;