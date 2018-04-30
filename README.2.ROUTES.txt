Rotas para acesso  disponiveis no Serviço:

GET - http://fabrondon.uh-app.com.br/api/v1/user ---1.0---
	Rota que tem a responsavilidade de devolver  todos os usuarios cadastrados na aplicacao esta é a única rota disponivel aberta para testar.

GET - http://fabrondon.uh-app.com.br/api/v1/user/:username ---1.1---
	Rota que tem a responsavilidade de devolver o usuario com o username passado na rota ex: http://fabrondon.uh-app.com.br/api/v1/user/jeziel

POST - http://fabrondon.uh-app.com.br/api/v1/user ---1.2---
	Rota que tem a responsavilidade de cadastrar usuario nescessario passar como parametro o objeto que deseja salvar

PUT - http://fabrondon.uh-app.com.br/api/v1/user/:id ---1.3---
	Rota que tem a responsavilidade de alterar os seguintes campos do usuario { name: string, email: string, confirmEmail: string }

PUT - http://fabrondon.uh-app.com.br/api/v1/user/password/:id ---1.4---
	Rota que tem a responsavilidade de alterar os seguintes campos do usuario { password: string, confirmPassword: string }

PUT - http://fabrondon.uh-app.com.br/api/v1/user/username/:id ---1.5---
	Rota que tem a responsavilidade de alterar os seguintes campos do usuario { username: string, confirmUsername: string }

POST - http://fabrondon.uh-app.com.br/api/v1/auth ---2.0---
	Rota que tem a responsavilidade de devolver token de acesso é nescessario passar usuario e senha validos no corpo da requisicao pois a rota ira devolver um token de acesso para acessar as demais rotas.

get - http://fabrondon.uh-app.com.br/api/v1/auth/verify ---2.1---
	Rota que tem a responsavilidade de devolver SE token de acesso é Valido

POST - http://fabrondon.uh-app.com.br/api/v1/sale/limit ---3.0---
	Rota que tem a responsavilidade de devolver todas ultimas vendas de algum cnpj ex: quero verificar as ultmas 100 vendas da loja 1 você passa no corpo da requisição o cnpj e a quantidade de vendas que deseja.

POST - http://fabrondon.uh-app.com.br/api/v1/sale/day ---4.0---
	Rota que tem a responsavilidade de devolver  todas as vendas diarias dos mês, ano e cnpj passado por parametro no corpo da requisição.

POST - http://fabrondon.uh-app.com.br/api/v1/sale/month ---5.0---
	Rota que tem a responsavilidade de devolver fechamento mensal de acordo com mês, ano e cnpj passado no corpo da requisição.

POST - http://fabrondon.uh-app.com.br/api/v1/client ---6.0--- 
	Rota que tem a responsavilidade de devolver todos os clientes de um determinado cnpj que é passado no corpo da requisição.

POST – http://fabrondon.uh-app.com.br/api/v1/product ---7.0--- 
	Rota que tem a responsavilidade de devolver todos os produtos de um determinado cnpj, data inicial e data final passado no corpo da requisicao.

get - http://fabrondon.uh-app.com.br/api/v1/company/:userId ---8.0---
Rota que tem a responsavilidade de devolver todas as empresa com id do usuario responsavel;