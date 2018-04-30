//#region  Imports
import { ICompany } from './company.model';
import { Response } from 'express';

import CompanyService from './company.service';
import response from './../../api/responses/response.default';

import * as HttpStatus from 'http-status';
//#endregion
class CompanyBusiness {
    constructor() { }
    //#region  FindById
    async findById(res: Response, id: number) {
        try {
            let data = await CompanyService.findById(id);
            response(res, HttpStatus.OK, data);
        } catch (error) {
            response(res, HttpStatus.INTERNAL_SERVER_ERROR, error.message || error)
        }
    }
    //#endregion

    //#region  Create
    async create(res: Response, company: ICompany) {
        try {
            let data = await CompanyService.create(company);
            response(res, HttpStatus.OK, data);
        } catch (error) {
            response(res, HttpStatus.INTERNAL_SERVER_ERROR, error.message || error)
        }
    }
    //#endregion

    //#region  Update
    async update(res: Response, id: number, company: ICompany) {
        try {
            let data = await CompanyService.update(id, company);
            response(res, HttpStatus.OK, data);
        } catch (error) {
            response(res, HttpStatus.INTERNAL_SERVER_ERROR, error.message || error)
        }
    }
    //#endregion

    //#region  Remove
    async remove(res: Response, id: number) {
        try {
            let data = await CompanyService.remove(id);
            response(res, HttpStatus.OK, data);
        } catch (error) {
            response(res, HttpStatus.INTERNAL_SERVER_ERROR, error.message || error)
        }
    }
    //#endregion
}

export default new CompanyBusiness();