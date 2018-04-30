import { IUser } from './user.model';

var model = require('./../../models');

class UserService {

    constructor() { }

    async findAll() {
        return await model.User.findAll({
            attributes: ['id', 'name', 'username', 'active', 'email']
        });
    }

    async create(user: IUser) {
        return await model.User.create(user);
    }


    async update(id: string, user: any) {
        return await model.User.update(user, {
            where: { id },
            fields: ['name', 'email', 'active']
        });
    }

    async updatePassword(id: string, passwordUpdated: any) {
        return await model.User.update(passwordUpdated, {
            where: { id },
            fields: ['password']
        });
    }

    async updateUsername(id: string, usernameUpdated: any) {
        return await model.User.update(usernameUpdated, {
            where: { id },
            fields: ['username']
        });
    }

    getById(id: number) {
        return model.User.findOne({ where: { id } });
    }

    getByUsername(username: string) {
        return model.User.findOne({ where: { username: username } });
    }

}

export default new UserService();