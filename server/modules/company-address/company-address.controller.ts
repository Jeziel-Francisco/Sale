import { Request, Response } from 'express';

import CompanyAddressBusiness from './company-address.business';

class CompanyAddressController {
    constructor() { }

    findById(req: Request, res: Response) {
        CompanyAddressBusiness.findById(res, req.params.id);
    }

    create(req: Request, res: Response) {
        CompanyAddressBusiness.create(res, req.body);
    }

    update(req: Request, res: Response) {
        CompanyAddressBusiness.update(res, req.params.id, req.body);
    }

    remove(req: Request, res: Response) {
        CompanyAddressBusiness.remove(res, req.params.id);
    }

}

export default new CompanyAddressController();