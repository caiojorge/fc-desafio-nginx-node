# Como executar o projeto?
* make up (sobe os 3 serviços)
* make down (desliga tudo)
* docker rmi $(docker images -q) -f (apaga todas as imagens)
* http://localhost (para ver o texto fullcycle e o nome dos usuários)

# Observações: 
o diretorio /mysql será criado automaticamente no make up
o script de criação de tabela só funciona na primeira execução
o usuário é cadastrado apenas no momento em que o server é executado
o node espera pelo sql usando dockerize
não desliguei a porta 3000, então, é possível acessar por ela tbm.

# Desafio

Nesse desafio você colocará em prática o que aprendemos em relação a utilização do nginx como proxy reverso. 

A idéia principal é que quando um usuário acesse o nginx, o mesmo fará uma chamada em nossa aplicação node.js. 

Essa aplicação por sua vez adicionará um registro em nosso banco de dados mysql, cadastrando um nome na tabela people.

O retorno da aplicação node.js para o nginx deverá ser:

<h1>Full Cycle Rocks!</h1>

- Lista de nomes cadastrada no banco de dados.

Gere o docker-compose de uma forma que basta apenas rodarmos: docker-compose up -d que tudo deverá estar funcionando e disponível na porta: 8080.

Suba tudo em um repositório e faça a entrega.

* A linguagem de programação para este desafio é Node/JavaScript.


