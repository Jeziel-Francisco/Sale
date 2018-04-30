import { Request, Response } from 'express';

import SaleBusiness from './sale.business';

class SaleController {
    constructor() { }

    findById(req: Request, res: Response): void { }

    create(req: Request, res: Response): void { }

    update(req: Request, res: Response): void { }

    remove(req: Request, res: Response): void { }

}

export default new SaleController();