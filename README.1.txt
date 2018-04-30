WebService Para Relatorio do Aplicativo da Sys3 

Em Cima do dominio http://fabrondon.uh-app.com.br

Foi dos seguintes modulos: Auth, Routes, Controllers, Business, Services, Models.

Auth é a camada onde verifica se usuario tem ou não permicao para acessar alguns recursos.

Routes é a camada responsavel por receber as requisicoes.

Controllers é a camada responsavel por designar quem e quais recursos serão chamados.

Business é a camada responsavel por validar as requisicoes e implicar as regras de negocio da aplicacao.

Services é a camada responsavel por acesso a dados é la que existe o acesso a dados.

Models é o modelo de cada camada ex: Usuario possui id, username, password… e é nesta camada que nos define os campos que o usuario irá ter.