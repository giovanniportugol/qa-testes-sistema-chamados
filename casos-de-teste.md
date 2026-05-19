# Casos de Teste - Sistema de Chamados

## Funcionalidade: Login

| ID | Cenário | Pré-condição | Passos | Resultado Esperado |
|---|---|---|---|---|
| CT-001 | Login com dados válidos | Usuário cadastrado | 1. Acessar a tela de login <br> 2. Informar e-mail válido <br> 3. Informar senha válida <br> 4. Clicar em Entrar | O sistema deve permitir o acesso do usuário |
| CT-002 | Login com senha incorreta | Usuário cadastrado | 1. Acessar a tela de login <br> 2. Informar e-mail válido <br> 3. Informar senha incorreta <br> 4. Clicar em Entrar | O sistema deve exibir mensagem de erro |
| CT-003 | Login com campos vazios | Nenhuma | 1. Acessar a tela de login <br> 2. Deixar e-mail e senha vazios <br> 3. Clicar em Entrar | O sistema deve informar que os campos são obrigatórios |

## Funcionalidade: Cadastro de Chamado

| ID | Cenário | Pré-condição | Passos | Resultado Esperado |
|---|---|---|---|---|
| CT-004 | Criar chamado com dados válidos | Usuário logado | 1. Acessar a opção Novo Chamado <br> 2. Preencher título, descrição e categoria <br> 3. Clicar em Salvar | O sistema deve cadastrar o chamado com sucesso |
| CT-005 | Criar chamado sem título | Usuário logado | 1. Acessar a opção Novo Chamado <br> 2. Deixar o campo título vazio <br> 3. Preencher os demais campos <br> 4. Clicar em Salvar | O sistema deve informar que o título é obrigatório |
| CT-006 | Criar chamado sem descrição | Usuário logado | 1. Acessar a opção Novo Chamado <br> 2. Preencher o título <br> 3. Deixar descrição vazia <br> 4. Clicar em Salvar | O sistema deve informar que a descrição é obrigatória |

## Funcionalidade: Consulta de Chamados

| ID | Cenário | Pré-condição | Passos | Resultado Esperado |
|---|---|---|---|---|
| CT-007 | Consultar lista de chamados | Usuário logado e chamados cadastrados | 1. Acessar a tela Meus Chamados | O sistema deve exibir a lista de chamados cadastrados |
| CT-008 | Filtrar chamado por status | Usuário logado e chamados cadastrados | 1. Acessar Meus Chamados <br> 2. Selecionar um status no filtro | O sistema deve exibir apenas os chamados com o status selecionado |
| CT-009 | Consultar chamado inexistente | Usuário logado | 1. Acessar Meus Chamados <br> 2. Pesquisar por um número de chamado inexistente | O sistema deve informar que nenhum chamado foi encontrado |
