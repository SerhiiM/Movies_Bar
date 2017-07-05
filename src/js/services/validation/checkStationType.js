import Joi from "joi";

export const checkStationType = {
        name: Joi.string().trim().min(2).max(255).label('Name'),
        active: Joi.boolean().label('Status')
};