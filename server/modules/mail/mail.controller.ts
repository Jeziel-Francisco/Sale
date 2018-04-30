import { Request, Response } from 'express';

import MailBusiness from './mail.business';

class MailController {
    constructor() { }

    sendMail(req: Request, res: Response) {
        MailBusiness.sendMail(res, req.body);
    }
}

export default new MailController();