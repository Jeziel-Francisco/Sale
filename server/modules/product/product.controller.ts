import { Request, Response } from 'express';

import ProductBusiness from './product.business';

class ProductController {
    constructor() { }

    findById(req: Request, res: Response) {
        ProductBusiness.findById(res, req.params.id);
    }

    create(req: Request, res: Response) {
        ProductBusiness.create(res, req.body);
    }

    update(req: Request, res: Response) {
        ProductBusiness.update(res, req.params.id, req.body);
    }

    remove(req: Request, res: Response) {
        ProductBusiness.remove(res, req.params.id);
    }
}

export default new ProductController();