import { Response } from 'express';

import * as jwtSimple from 'jwt-simple';

import MailBusiness from './../../modules/mail/mail.business';

import * as HttpStatus from 'http-status';

export default function authFail(res: Response, error?: any) {
    res.status(HttpStatus.UNAUTHORIZED).json(error.message || { message: 'Erro no processo de autenticação' });
}