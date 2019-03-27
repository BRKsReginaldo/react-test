## Teste de react

### Objetivo:

Na aplicação frontend temos um painel administrativo simples com alguns menus

* Users (usuarios)
* Bills (contas)
* Income (receita)

O objetivo aqui é mostrar/esconder esses menus com base nas permissões de leitura do usuario autenticado, caso o usuario
possua permissão de leitura, esse menu deve aparecer para ele, caso contrário não.

Se o usuario possui permissão de leitura, mas não de escrita, o botão para adicionar um novo usuario/conta/receita não deve
aparecer para ele


### Informações Extra

no backend foram criadas algumas rotas em uma api rest.

para conseguir informações sobre o usuario logado, existe o endpoint `/user?id=1|2|3`

para conseguir informações sobre as permissões do usuario logado, existe o endpoint `/user/permissions?id=1|2|3`

para conseguir informações sobre todos os usuarios, existe o endpoint `/users`

para conseguir informações sobre todas as contas a pagar, existe o endpoint `/bills`

para conseguir informações sobre todas as receitas, existe o endpoint `/income`


### Usuario Logado

O usuario logado é controlado atraves do parametro ?id=1|2|3 na url, para acessar com outro usuario basta alterar este valor,
desde que esteja entre um dos tres ids validos


### Como rodar o app

Primeiro você precisa ter o node instalado, para iniciar o backend basta navegar até a pasta `backend` com um terminal e
digitar os seguintes comandos:

```yarn install```

```yarn dev```

Para executar o frontend é necessário fazer o mesmo processo, porem com `yarn start`

```yarn install```

```yarn start```