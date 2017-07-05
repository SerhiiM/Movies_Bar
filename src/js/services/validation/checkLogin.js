import Joi from "joi";

export const checkLogin = {
        email: Joi.string().trim().min(7).max(255).regex(/@/).label('Email').options({
            language: {
                string: {
                    regex: {
                        base: 'must be valid email'
                    }
                }
            }
        }),
        password: Joi.string().min(6).max(25).trim().label('Password')
};