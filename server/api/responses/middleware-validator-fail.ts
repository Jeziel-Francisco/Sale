import { Response } from 'express';

import response from './response.default';

import * as HttpStatus from 'http-status';

export default function middlewareValidatorFail(res, next, error, result ) {
    if (error) {
        return response(res, HttpStatus.BAD_REQUEST, error.message || error);
    }
    next();
}