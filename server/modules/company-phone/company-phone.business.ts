//#region Imports
import { ICompanyPhone } from './company-phone.model';
import { Response } from 'express';

import response from './../../api/responses/response.default';
import CompanyPhoneService from './company-phone.service';

import * as HttpStatus from 'http-status';
//#endregion

class CompanyPhoneBusiness {
    constructor() { }
    //#region FindById
    async findById(res: Response, id: number) {
        try {
            let data = await CompanyPhoneService.findById(id);
            response(res, HttpStatus.OK, data);
        } catch (error) {
            response(res, HttpStatus.INTERNAL_SERVER_ERROR, error.message || error);
        }
    }
    //#endregion

    //#region  Create
    async create(res: Response, companyPhone: ICompanyPhone) {
        try {
            let data = await CompanyPhoneService.create(companyPhone);
            response(res, HttpStatus.OK, data);
        } catch (error) {
            response(res, HttpStatus.INTERNAL_SERVER_ERROR, error.message || error);
        }
    }
    //#endregion

    //#region  Update
    async update(res: Response, id: number, companyPhone: ICompanyPhone) {
        try {
            let data = await CompanyPhoneService.update(id, companyPhone);
            response(res, HttpStatus.OK, data);
        } catch (error) {
            response(res, HttpStatus.INTERNAL_SERVER_ERROR, error.message || error);
        }
    }
    //#endregion

    //#region  Remove
    async remove(res: Response, id: number) {
        try {
            let data = await CompanyPhoneService.remove(id);
            response(res, HttpStatus.OK, data);
        } catch (error) {
            response(res, HttpStatus.INTERNAL_SERVER_ERROR, error.message || error);
        }
    }
    //#endregion
}

export default new CompanyPhoneBusiness();