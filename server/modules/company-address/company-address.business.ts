//#region Imports
import { ICompanyAddress } from './company-address.model';
import { Response } from 'express';

import CompanyAddressService from './company-address.service';

import response from './../../api/responses/response.default';

import * as HttpStatus from 'http-status';
//#endregion

class CompanyAddressBusiness {
    constructor() { }
    //#region  FindById
    async findById(res: Response, id: number) {
        try {
            let data = await CompanyAddressService.findById(id);
            response(res, HttpStatus.OK, data);
        } catch (error) {
            response(res, HttpStatus.INTERNAL_SERVER_ERROR, error.message || error)
        }
    }
    //#endregion

    //#region  Create
    async create(res: Response, companyAddress: ICompanyAddress) {
        try {
            let data = await CompanyAddressService.create(companyAddress);
            response(res, HttpStatus.OK, data);
        } catch (error) {
            response(res, HttpStatus.INTERNAL_SERVER_ERROR, error.message || error)
        }
    }
    //#endregion

    //#region  Update
    async update(res: Response, id: number, companyAddress: ICompanyAddress) {
        try {
            let data = await CompanyAddressService.update(id, companyAddress);
            response(res, HttpStatus.OK, data);
        } catch (error) {
            response(res, HttpStatus.INTERNAL_SERVER_ERROR, error.message || error)
        }
    }
    //#endregion

    //#region  Remove
    async remove(res: Response, id: number) {
        try {
            let data = await CompanyAddressService.remove(id);
            response(res, HttpStatus.OK, data);
        } catch (error) {
            response(res, HttpStatus.INTERNAL_SERVER_ERROR, error.message || error)
        }
    }
    //#endregion
}

export default new CompanyAddressBusiness();