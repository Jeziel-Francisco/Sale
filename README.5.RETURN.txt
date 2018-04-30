MODELOS DE RETORNO

Rota 1.0: 
	[
		{
			id: number,
			cnpj: string,
			name: string,
			email: string,
			password: string,
			username: string,
		}
	]
	
	Essa rota devolve uma lista de usuarios com os campos acima.

Rota 1.1:
    {
        id: number,
        cnpj: string,
        name: string,
        email: string,
        password: string,
        username: string,
    }

Rota 1.2:
    {
        id: number,
        cnpj: string,
        name: string,
        email: string,
        password: string,
        username: string,
    }

Rota 1.4:
    retornara a quantidade de registros alterados 
Rota 1.5:
    retornara a quantidade de registros alterados 

Rota 2.0: 
	{
	    token: string,
	}
	Essa rota ira devolver um token de acesso com o campo token como apresentado acima.

Rota 2.1:
    {'Token Access Valid' or 'UNAUTHORIZED'}

Rota 3.0:
	[
		{
			id: number,
			cnpj: string,
			emission: Date,
			numberSale: number,
			total: number,
			canceld: string,
		}
	]
	Essa rota devolve uma lista com informações das ultmas vendas.

Rota 4.0:
	[
		{
			id: number,
			firstSaleDay: Date,
			total: number,
			amountSale: number,
			lastSaleDay: Date,
		}	
	]
	Essa Rota devolve uma lista de vendas diarias de acordo com os parametros enviados na requisicao.

Rota 5.0:
	{
		firstSaleMonth: Date,
		total: number,
		amountSale: number,
		lastSaleMonth: Date,
	}
	Essa Rota devolve um Objeto com os campos acima
Rota 6.0:
	[
		{
			id: number,
			codeInternal: number,
			name: string,
			nameFantasy: string,
			registrationState: string,
			registrationMunicipal: string,
			address: string,
			neighborhood: string,
			codeCity: string,
			initialState: string,
			email: string,
			emailFinancial: string,
			emailAdministrative: string,
			emailSales: string,
		}	
	]
	Essa Rota Devolve uma lista de Clientes com os campos acima

Rota 7.0:
	[
		{
			id: number,
			description: string,
			stock: number,
			priceUnity: number,
			amountSale: number,
			totalSale: number,
		}
	]
Essa Rota Devolve uma Lista de Produtos com os campos acima

Rota 8.0:
    [
        {
            cnpj: string,
            id: number,
            userId: number,
            name: string,
            nameFatasy: string
        }
    ]