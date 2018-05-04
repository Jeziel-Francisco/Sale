import { IClientPhone } from './client-phone.model';
import ServiceModules from '../interface-service.modules';

const models = require('./../../models');

class ClientPhoneService extends ServiceModules<IClientPhone>{
    constructor() {
        super(
            models.ClientPhone,
            ['phone', 'contact'],
            ['id', 'phone', 'contact']
        )
    }
}

export default new ClientPhoneService();