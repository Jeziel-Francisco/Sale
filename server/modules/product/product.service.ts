import { IProduct } from './product.model';

class ProductService {

    constructor() { }

    async findById(id: number) { }

    async create(product: IProduct) { }

    async update(id: number, product: IProduct) { }

    async remove(id: number) { }
}

export default new ProductService();