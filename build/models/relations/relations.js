var Relations = function (model) {
    // Relacionamento entre Phone e Company
    model.Company.hasMany(model.CompanyPhone, { foreignKey: 'companyId' });
    model.CompanyPhone.belongsTo(model.Company, { foreignKey: 'companyId' });
    // Relacionamento entre User e Company
    model.Company.hasMany(model.User, { foreignKey: 'companyId' });
    model.User.belongsTo(model.Company, { foreignKey: 'companyId' });
    // Relacionamento entre  Companye Tipo de Document
    model.Company.hasMany(model.TypeDocument, { foreignKey: 'companyId' });
    model.TypeDocument.belongsTo(model.Company, { foreignKey: 'companyId' });
    // Relacionamento entre Company e Address
    model.Company.belongsToMany(model.Address, { through: { model: model.CompanyAddress }, foreignKey: 'companyId' });
    model.Address.belongsToMany(model.Company, { through: { model: model.CompanyAddress }, foreignKey: 'addressId' });
    // Relacionamento entre User e Permissions]
    model.User.belongsToMany(model.Permissions, { through: { model: model.UserPermissions }, foreignKey: 'userId' });
    model.Permissions.belongsToMany(model.User, { through: { model: model.UserPermissions }, foreignKey: 'permissionsId' });
    // Relacionamento entre Permissions e Page
    model.Page.hasMany(model.Permissions, { foreignKey: 'pageId' });
    model.Permissions.belongsTo(model.Page, { foreignKey: 'pageId' });
    // Relaciomaneto entre State e City
    model.State.hasMany(model.City, { foreignKey: 'stateId' });
    model.City.belongsTo(model.State, { foreignKey: 'stateId' });
    // Relacionamento entre Address e City
    model.City.hasMany(model.Address, { foreignKey: 'cityCode' });
    model.Address.belongsTo(model.Address, { foreignKey: 'cityCode' });
    //Relaciomaneto entre Client e Address
    model.Client.belongsToMany(model.Address, { through: { model: model.ClientAddress }, foreignKey: 'clientId' });
    model.Address.belongsToMany(model.Client, { through: { model: model.ClientAddress }, foreignKey: 'addressId' });
    // Relacionamento entre Client e Phone
    model.Client.hasMany(model.ClientPhone, { foreignKey: 'clientId' });
    model.ClientPhone.belongsTo(model.Client, { foreignKey: 'clientId' });
    // Relacionamento entre Fornecedor e Telefone
    model.Provider.hasMany(model.ProviderPhone, { foreignKey: 'providerId' });
    model.ProviderPhone.belongsTo(model.Provider, { foreignKey: 'providerId' });
    // Relaciomaneto entre Fornecedor e Endereco
    model.Provider.belongsToMany(model.Address, { through: { model: model.ProviderAddress }, foreignKey: 'providerId' });
    model.Address.belongsToMany(model.Provider, { through: { model: model.ProviderAddress }, foreignKey: 'addressId' });
    // Relacionamento entre Fornecedor e Empresa
    model.Company.hasMany(model.Provider, { foreignKey: 'companyId' });
    model.Provider.belongsTo(model.Company, { foreignKey: 'companyId' });
    // Relacionamento entre Fornecedor e Produto
    model.Provider.belongsToMany(model.Product, { through: { model: model.ProductProvider }, foreignKey: 'providerId' });
    model.Product.belongsToMany(model.Provider, { through: { model: model.ProductProvider }, foreignKey: 'productId' });
    // Relacionamento entre Produto e Embalahem
    model.Packing.hasMany(model.Product, { foreignKey: 'packingId' });
    model.Product.belongsTo(model.Packing, { foreignKey: 'packingId' });
    // Relacionamento entre Produto e Grupo
    model.Product.belongsToMany(model.Group, { through: { model: model.ProductGroup }, foreignKey: 'productId' });
    model.Group.belongsToMany(model.Product, { through: { model: model.ProductGroup }, foreignKey: 'groupId' });
    // Relaciomaneto entre Produto e Venda
    model.Product.belongsToMany(model.Sale, { through: { model: model.ProductSale }, foreignKey: 'productId' });
    model.Sale.belongsToMany(model.Product, { through: { model: model.ProductSale }, foreignKey: 'saleId' });
    // Relaciomanento entre Produto e Empresa
    model.Company.hasMany(model.Product, { foreignKey: 'companyId' });
    model.Product.belongsTo(model.Company, { foreignKey: 'companyId' });
    // Relacionamento entre Venda e Empresa
    model.Company.hasMany(model.Sale, { foreignKey: 'companyId' });
    model.Sale.belongsTo(model.Company, { foreignKey: 'companyId' });
    // Relacionamento entre Venda e Cliente
    model.Client.hasMany(model.Sale, { foreignKey: 'clientId' });
    model.Sale.belongsTo(model.Client, { foreignKey: 'clientId' });
    // Relacionamento entre Venda e Receber
    model.Sale.hasMany(model.Receive, { foreignKey: 'saleId' });
    model.Receive.belongsTo(model.Sale, { foreignKey: 'saleId' });
    // Relacionamento entre Receber e Pagamento do Receber
    model.Receive.hasMany(model.ReceivePayment, { foreignKey: 'receiveId' });
    model.ReceivePayment.belongsTo(model.Receive, { foreignKey: 'receiveId' });
    // Relacionamento entre Receber e Typo de documento
    model.Receive.hasMany(model.TypeDocument, { foreignKey: 'typeDocumentId' });
    model.TypeDocument.belongsTo(model.Receive, { foreignKey: 'typeDocumentId' });
    // Relacionamento entre Pagamento do receber e Typo de documento
    model.ReceivePayment.hasMany(model.TypeDocument, { foreignKey: 'typeDocumentId' });
    model.TypeDocument.belongsTo(model.ReceivePayment, { foreignKey: 'typeDocumentId' });
    // Relacionamento entre Receber e Cliente
    model.Client.hasMany(model.Receive, { foreignKey: 'clientId' });
    model.Receive.belongsTo(model.Client, { foreignKey: 'clientId' });
};
module.exports = Relations;
