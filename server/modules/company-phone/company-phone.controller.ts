import { Request, Response } from 'express';

import CompanyPhoneBusiness from './company-phone.business';

class CompanyPhoneController {
    constructor() { }

    findById(req: Request, res: Response) {
        CompanyPhoneBusiness.findById(res, req.params.id);
    }

    create(req: Request, res: Response) {
        CompanyPhoneBusiness.create(res, req.body);
    }

    update(req: Request, res: Response) {
        CompanyPhoneBusiness.update(res, req.params.id, req.body);
    }

    remove(req: Request, res: Response) {
        CompanyPhoneBusiness.remove(res, req.params.id);
    }
}

export default new CompanyPhoneController();