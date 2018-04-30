import { Request, Response } from 'express';

import CityBusiness from './city.business';

class CityController {
    constructor() { }

    findById(req: Request, res: Response) {
        CityBusiness.findById(res, req.params.id);
    }

    create(req: Request, res: Response) {
        CityBusiness.create(res, req.body);
    }

    update(req: Request, res: Response) {
        CityBusiness.update(res, req.params.id, req.body);
    }

    remove(req: Request, res: Response) {
        CityBusiness.remove(res, req.params.id);
    }
}

export default new CityController();