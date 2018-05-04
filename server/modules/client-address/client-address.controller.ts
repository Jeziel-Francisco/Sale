import { Request, Response } from "express";

import ClientAddressBusiness from './client-address.business';
import ControllerModules from "../interface-controller.modules";

class ClientAddressController extends ControllerModules {
    constructor() {
        super(ClientAddressBusiness);
    }
}

export default new ClientAddressController();