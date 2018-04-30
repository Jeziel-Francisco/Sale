//#region Imports 
import { ICity } from './city.model';
import { Response } from 'express';

import CityService from './city.service';
import response from './../../api/responses/response.default';

import * as HttpStatus from 'http-status';
//#endregion
class CityBusiness {
    constructor() { }
    //#region  FindById 
    async findById(res: Response, id: number) {
        try {
            let data = await CityService.findById(id);
            response(res, HttpStatus.OK, data);
        } catch (error) {
            response(res, HttpStatus.INTERNAL_SERVER_ERROR, error.message || error);
        }
    }
    //#endregion

    //#region  Create
    async create(res: Response, city: ICity) {
        try {
            let data = await CityService.create(city);
            response(res, HttpStatus.OK, data);
        } catch (error) {
            response(res, HttpStatus.INTERNAL_SERVER_ERROR, error.message || error);
        }
    }
    //#endregion

    //#region Update
    async update(res: Response, id: number, city: ICity) {
        try {
            let data = await CityService.update(id, city);
            response(res, HttpStatus.OK, data);
        } catch (error) {
            response(res, HttpStatus.INTERNAL_SERVER_ERROR, error.message || error);
        }
    }
    //#endregion

    //#region Remove 
    async remove(res: Response, id: number) {
        try {
            let data = await CityService.remove(id);
            response(res, HttpStatus.OK, data);
        } catch (error) {
            response(res, HttpStatus.INTERNAL_SERVER_ERROR, error.message || error);
        }
    }
    //#endregion
}

export default new CityBusiness();