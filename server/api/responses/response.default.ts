import { Response } from 'express';
import * as HttpStatus from 'http-status';
import MailBusiness from './../../modules/mail/mail.business';

export default function response(res: Response, statusCode, data) {
    res.status(statusCode).json(data);
}