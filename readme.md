# Este é um teste para desenvolvedores

# possui 5 testes

## Introdução

Este projeto possui um banco de dados fake em fakeData.js com apenas um registro.
A ideia é melhorar e o CRUD escrito nos 4 arquivos de teste abaixo.

Será a validada a forma de escrita de código.
Escreva códigos que humanos consigam entender.

Fique a vontade para fazer modificaçoes nos serviços, comentários em código, estrutura, mas seja objetivo.

## teste1.js

GET em /user 

Possuimos neste arquivo um serviço que faz uma busca no banco fake e retorna um registro.
Este código funciona, mas é possivel melhorar.
Veja o que pode deixar ele melhor escrito e mais performatico.

## teste2.js

POST em /users, descubra a intenção dele e o corrija.

## teste3.js

Este procura um usuário e o deleta da base.
Retorne sucesso para o client caso realmente tenha sido excluido e deixe o código mais performatico.

## teste4.js

Atualiza os dados de um usuário especifico.

## teste5.js

Retorne quantas vezes determinado usuário foi lido no teste1.

## teste 6

Definina uma forma de criar permissão para o usuario, defina se o usuário pode deletar ou atualizar usuários. Crie um middleware para validar essas permissões e adicione no teste4 e teste3.

Para o teste 6 eu adicionei uma "senha" e "role" para os usuarios e criei um endpoint de login, onde o voce fara um post passando um json

{
	"name": "Arthur",
	"password": "senha123"
}

A senha é salva com criptografia "bcrypt", ao fazer o post, a senha é comparada pela propria biblioteca bcrypt, com a senha criptografada, 
se retornar um okay, sera gerado um token JWT, salvando o "name" e "role" do usuario.

O fazer um request de update/delete, sera necessario enviar o token via header Authorization
esse token sera decriptografado com um "secret" e ira retornar o "name" e "role" do usuario, caso ele seja um admin, o delete/update sera efetuado.