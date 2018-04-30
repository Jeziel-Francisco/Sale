//#region  Imports
import { IUser } from './user.model';
import { Response } from 'express';

import response from './../../api/responses/response.default';
import UserService from './user.service';

import * as HttpStatus from 'http-status';
//#endregion

class UserBusiness {
    constructor() { }

    //#region  Verify
    verify(res: Response): void {
        response(res, HttpStatus.OK, 'Token Access Valid');
    }
    //#endregion

    //#region  FindAll
    async findAll(res: Response) {
        try {
            const data = await UserService.findAll();
            response(res, HttpStatus.OK, data);
        } catch (error) {
            response(res, HttpStatus.INTERNAL_SERVER_ERROR, error.message || error)
        }
    }
    //#endregion

    //#region  GetByUsername
    async getByUsername(res: Response, username: string) {
        try {
            const data = await UserService.getByUsername(username);
            response(res, HttpStatus.OK, data);
        } catch (error) {
            response(res, HttpStatus.INTERNAL_SERVER_ERROR, error.message || error)
        }
    }
    //#endregion

    //#region  Create
    async create(res: Response, user: IUser) {
        try {
            const data = await UserService.create(user);
            response(res, HttpStatus.OK, data);
        } catch (error) {
            response(res, HttpStatus.INTERNAL_SERVER_ERROR, error.message || error)
        }
    }
    //#endregion

    //#region  Update
    async update(res: Response, id: string, user: any) {
        try {
            const data = await UserService.update(id, user);
            response(res, HttpStatus.OK, data);
        } catch (error) {
            response(res, HttpStatus.INTERNAL_SERVER_ERROR, error.message || error)
        }
    }
    //#endregion

    //#region  updatePassword
    async updatePassword(res: Response, id: string, passwordUpdated: any) {
        try {
            const data = await UserService.updatePassword(id, passwordUpdated);
            response(res, HttpStatus.OK, data);
        } catch (error) {
            response(res, HttpStatus.INTERNAL_SERVER_ERROR, error.message || error)
        }
    }
    //#endregion

    //#region  updateUsername
    async updateUsername(res: Response, id: string, usernameUpdated: any) {
        try {
            const data = await UserService.updateUsername(id, usernameUpdated);
            response(res, HttpStatus.OK, data);
        } catch (error) {
            response(res, HttpStatus.INTERNAL_SERVER_ERROR, error.message || error)
        }
    }
    //#endregion

    //#region  GetByAuth
    getByIdAuth(id: number) {
        return UserService.getById(id);
    }
    //#endregion

    //#region  GetByUsernameAuth
    getByUsernameAuth(username: string) {
        return UserService.getByUsername(username);
    }
    //#endregion

}
export default new UserBusiness();