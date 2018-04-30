//#region Imports
import { IProduct } from './product.model';
import { Response } from 'express';

import ProductService from './product.service';
import response from './../../api/responses/response.default';

import * as HttpStatus from 'http-status';
//#endregion

class ProductBusiness {
    constructor() { }
    //#region  FindById
    async findById(res: Response, id: number) {
        ProductService.findById(id);
    }
    //#endregion

    //#region  Create
    async create(res: Response, product: IProduct) {
        ProductService.create(product);
    }
    //#endregion

    //#region  Update
    async update(res: Response, id: number, product: IProduct) {
        ProductService.update(id, product);
    }
    //#endregion

    //#region  Remove
    async remove(res: Response, id: number) {
        ProductService.remove(id);
    }
    //#endregion
}

export default new ProductBusiness();