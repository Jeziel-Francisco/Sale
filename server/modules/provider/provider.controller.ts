import { Response, Request } from 'express';

import ControllerModules from "../interface-controller.modules";
import ProviderBusiness from './provider.business';

class ProviderController extends ControllerModules {

    constructor() {
        super(ProviderBusiness);
    }
}