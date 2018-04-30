import { Response } from 'express';

import CONFIG from './../../config/config';

import * as jwtSimple from 'jwt-simple';
import * as HttpStatus from 'http-status';

export default function authSuccess(res: Response, credentials: any, data: any) {
    const isMath = (credentials.password === data.password);

    if (isMath) {
        const payload = { id: data.id };

        res.json({
            token: jwtSimple.encode(payload, CONFIG.secret)
        })
    } else {
        res.status(HttpStatus.UNAUTHORIZED).json({ message: 'Usuario ou Senha Invalidos' });
    }

}
