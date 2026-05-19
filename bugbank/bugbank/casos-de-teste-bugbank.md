# Casos de Teste - BugBank

## Funcionalidade: Cadastro de Usuário

| ID | Cenário | Pré-condição | Passos | Resultado Esperado | Status |
|---|---|---|---|---|---|
| CT-BB-001 | Cadastro com dados válidos | Acessar a tela inicial do BugBank | 1. Clicar em Registrar <br> 2. Informar e-mail válido <br> 3. Informar nome <br> 4. Informar senha <br> 5. Confirmar senha <br> 6. Clicar em Cadastrar | O sistema deve cadastrar o usuário com sucesso | Executado |
| CT-BB-002 | Cadastro com e-mail inválido | Acessar a tela de cadastro | 1. Clicar em Registrar <br> 2. Informar e-mail inválido <br> 3. Preencher os demais campos <br> 4. Clicar em Cadastrar | O sistema deve exibir mensagem informando e-mail inválido | Planejado |
| CT-BB-003 | Cadastro com campos vazios | Acessar a tela de cadastro | 1. Clicar em Registrar <br> 2. Deixar os campos vazios <br> 3. Clicar em Cadastrar | O sistema deve informar que os campos obrigatórios devem ser preenchidos | Planejado |

## Funcionalidade: Login

| ID | Cenário | Pré-condição | Passos | Resultado Esperado | Status |
|---|---|---|---|---|---|
| CT-BB-004 | Login com dados válidos | Usuário cadastrado | 1. Informar e-mail válido <br> 2. Informar senha válida <br> 3. Clicar em Acessar | O sistema deve permitir o acesso à conta do usuário | Executado |
| CT-BB-005 | Login com senha inválida | Usuário cadastrado | 1. Informar e-mail válido <br> 2. Informar senha inválida <br> 3. Clicar em Acessar | O sistema deve exibir mensagem de erro de autenticação | Planejado |
| CT-BB-006 | Login com campos vazios | Acessar a tela inicial do BugBank | 1. Deixar e-mail e senha vazios <br> 2. Clicar em Acessar | O sistema deve informar que os campos são obrigatórios | Executado |

## Funcionalidade: Transferência

| ID | Cenário | Pré-condição | Passos | Resultado Esperado | Status |
|---|---|---|---|---|---|
| CT-BB-007 | Transferência com dados válidos | Usuário logado e com saldo disponível | 1. Acessar a opção Transferência <br> 2. Informar conta destino válida <br> 3. Informar dígito válido <br> 4. Informar valor <br> 5. Clicar em Transferir | O sistema deve realizar a transferência com sucesso | Planejado |
| CT-BB-008 | Transferência sem informar valor | Usuário logado | 1. Acessar Transferência <br> 2. Informar conta destino <br> 3. Deixar valor em branco <br> 4. Clicar em Transferir | O sistema deve informar que o valor é obrigatório | Planejado |
| CT-BB-009 | Transferência para conta inexistente | Usuário logado | 1. Acessar Transferência <br> 2. Informar conta inexistente <br> 3. Informar valor <br> 4. Clicar em Transferir | O sistema deve informar que a conta destino é inválida ou inexistente | Planejado |

## Funcionalidade: Extrato

| ID | Cenário | Pré-condição | Passos | Resultado Esperado | Status |
|---|---|---|---|---|---|
| CT-BB-010 | Consultar extrato | Usuário logado | 1. Acessar a opção Extrato | O sistema deve exibir as movimentações da conta | Planejado |
| CT-BB-011 | Validar transferência no extrato | Transferência realizada com sucesso | 1. Acessar Extrato <br> 2. Verificar movimentação realizada | O sistema deve exibir a transferência efetuada no extrato | Planejado |
