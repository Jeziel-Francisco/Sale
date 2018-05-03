import { IProviderPhone } from './provider-phone.model';
import ServiceModules from '../interface-service.modules';

const models = require('./../../models');

class ProviderPhoneService extends ServiceModules<IProviderPhone>{
    constructor() {
        super(
            models.ProviderPhone,
            ['phone', 'contact'],
            ['id', 'phone', 'contact', 'providerId']
        );
    }
}

export default new ProviderPhoneService();