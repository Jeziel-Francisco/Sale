import ControllerModules from "../interface-controller.modules";

import TypeDocumentBusiness from './type-document.business';

class TypeDocumentController extends ControllerModules {
    constructor() {
        super(TypeDocumentBusiness);
    }
}

export default new TypeDocumentController();