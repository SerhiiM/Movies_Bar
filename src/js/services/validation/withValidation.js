import React from "react";
import { HelpBlock } from "react-bootstrap";
import Joi from 'joi';
import lodash from "lodash";
import validation from "react-validation-mixin";
import strategy from "./joiValidationStrategy";
import validationFactory from "react-validation-mixin/lib/validationFactory";

const validator = validationFactory(strategy);

export function makeColumnValidator(columnName, schema, options = {}) {
    if (!schema.isJoi) {
        schema = Joi.object(schema)
    }
    const subSchema = Joi.reach(schema, columnName);
    return function columnValidator(columnValue) {
        const errors = validator.validateSync(columnValue, subSchema, options);
        const messages = validator.getValidationMessages(errors);
        if (messages.length) {
            return {
                isValid: false,
                notification: {
                    type: `error`,
                    msg: messages.join('\n'),
                    title: ``
                }
            };
        }
        return true;
    };
}
function validationMixin(Form) {
    Form.prototype.handleChange = function handleChange(param) {
        return (function handleChangeInternal(e) {
            this.setState(lodash.set(this.state, param, e.target.value));
        }).bind(this);
    }
    Form.prototype.getValidationState = function getValidationState(field) {
        return this.props.isValid(field) ? null : 'error';
    }
    Form.prototype.renderErrors = function renderErrors(field) {
        return this.props.getValidationMessages(field).map((message, index) => {
            return (<HelpBlock key={index}>{message}</HelpBlock>);
        });
    }
    return Form;
}
export default function withValidation(Form) {
    return validation(strategy)(validationMixin(Form));
}