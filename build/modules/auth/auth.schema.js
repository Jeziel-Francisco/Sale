"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Joi = require("joi");
var authSchema = Joi.object().keys({
    username: Joi.string().alphanum().min(3).max(120).required(),
    password: Joi.string().alphanum().min(6).max(256).required()
});
exports.default = authSchema;
