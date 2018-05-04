import { ITypeDocument } from './type-document.model';
import ServiceModules from '../interface-service.modules';

const models = require('./../../models');

class TypeDocumentService extends ServiceModules<ITypeDocument> {
    constructor() {
        super(
            models.TypeDocument,
            ['isReceive', 'isLiquidate', 'typeDocument', 'description', 'active'],
            ['id', 'isReceive', 'isLiquidate', 'typeDocument', 'description', 'active', 'companyId', 'cancelattionDate', 'registrationDate']
        );
    }

    async remove(id: number) {
        return await models.TypeDocument.update({ cancellationDate: Date.now, active: false }, {
            where: { id },
            fields: ['cancellationDate', 'active']
        });
    }
}

export default new TypeDocumentService();