import { IMail } from './mail.model';
import { Response } from 'express';

import { createTestAccount, createTransport } from 'nodemailer';

import response from './../../api/responses/response.default';

import * as HttpStatus from 'http-status';
import * as _ from 'lodash';

class MailBusiness {
    constructor() { }

    sendMail(res: Response, mail: IMail) {
        let transporter = createTransport(mail.smtpConfig);

        transporter
            .sendMail(mail.mailOptions)
            .then(_.partial(response, res, HttpStatus.OK))
            .catch((error) => response(res, HttpStatus.BAD_REQUEST, error.message || error));
    }
}

export default new MailBusiness();