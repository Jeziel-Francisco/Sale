import { ISale } from './sale.model';

class SaleService {
    constructor() { }

    async findById(id: number) { }

    async create(sale: ISale) { }

    async update(id: number, sale: ISale) { }

    async remove(id: number) { }
}

export default new SaleService();