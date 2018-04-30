import { Request, Response } from 'express';

import CompanyBusiness from './company.business';

class CompanyController {
    constructor() { }

    findById(req: Request, res: Response) {
        CompanyBusiness.findById(res, req.params.id);
    }

    create(req: Request, res: Response) {
        CompanyBusiness.create(res, req.body);
    }

    update(req: Request, res: Response) {
        CompanyBusiness.update(res, req.params.id, req.body);
    }

    remove(req: Request, res: Response) {
        CompanyBusiness.remove(res, req.params.id);
    }
}

export default new CompanyController();