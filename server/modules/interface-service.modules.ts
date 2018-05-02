abstract class ServiceModules<Model> {
    sequelize: any;
    fieldsUpdated: string[];
    fieldsReturn: string[];

    constructor(
        sequelize: any,
        fieldsUpdated: string[],
        fieldsReturn: string[]
    ) {
        this.sequelize = sequelize;
        this.fieldsReturn = fieldsReturn;
        this.fieldsUpdated = fieldsUpdated;
    }

    protected async findById(id: number) {
        return await this.sequelize.findOne({
            where: { id },
            fields: this.fieldsReturn
        });
    }

    protected async create(model: Model) {
        return await this.sequelize.create(model);
    }

    protected async update(id: number, model: Model) {
        return await this.sequelize.update(model, {
            where: { id },
            fields: this.fieldsUpdated
        });
    }

    protected async remove(id: number) {
        return await this.sequelize.destroy({
            where: { id }
        });
    }
}

export default ServiceModules;