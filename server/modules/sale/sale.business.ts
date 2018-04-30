//#region Imports
import { Response } from 'express';
import { ISale } from './sale.model';

import response from './../../api/responses/response.default';
import SaleService from './sale.service';

import * as HttpStatus from 'http-status';
//#endregion

class SaleBusiness {
    constructor() { }
    //#region FindById
    async findById(res: Response, id: number) { }
    //#endregion

    //#region  Create
    async create(res: Response, sale: ISale) { }
    //#endregion

    //#region  Update
    async update(res: Response, id: number, sale: ISale) { }
    //#endregion

    //#region  Remove
    async remove(res: Response, id: number) { }
    //#endregion
}

export default new SaleBusiness();