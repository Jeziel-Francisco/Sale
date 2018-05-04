import { ITypeDocument } from './type-document.model';
import { Response } from 'express';

import BusinessModules from './../interfate-business.modules';
import TypeDocumentService from './type-document.service';

class TypeDocumentBusiness extends BusinessModules<ITypeDocument>{
    constructor() {
        super(TypeDocumentService);
    }
}

export default new TypeDocumentBusiness();