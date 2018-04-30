Parametros obrigatorios no BODY das REQUISIÇÕES
Rota 1.0:
	Não se faz nescessario informacoes no corpo da requisção;
Rota 2.0:
	{
		username: string,
		password: string
	}
Rota 3.0:
	{
		limit: number,
		cnpj: string
	}
Rota 4.0:
	{
		month: number,
		year: number,
		cnpj: string
	}
Rota 5.0:
	{
		month: number,
		year: number,
		cnpj: string
	}
Rota 6.0:
	{
		cnpj: string
	}
Rota 7.0:
	{
		dateInitial: Date;
		dateFinal: Date;
		cnpj: string;
	}