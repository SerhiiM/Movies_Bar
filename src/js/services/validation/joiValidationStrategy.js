import Joi from 'joi';
import _ from 'lodash';
import { hydrate, decodeMessages, collectErrors, pickMessages } from 'joi-validation-strategy/lib/utils';
import strategy from "joi-validation-strategy";

export default joiOptions => {
    return Object.assign(strategy(joiOptions), {
        validateSync(data = {}, joiSchema = {}, options = {}) {
            const {
                key,
                prevErrors = {},
            } = options;
            const validationOptions = {
                abortEarly: false,
                allowUnknown: true,
                ...joiOptions,
            };
            const { error, value } = Joi.validate(data, joiSchema, validationOptions);
            const errors = _.compose(hydrate, pickMessages, collectErrors, decodeMessages)(error);
            if (key === undefined || key === null || _.isEmpty(errors)) {
                return errors;
            }
            return _.set(prevErrors, key, _.get(errors, key));
        }
    });
};