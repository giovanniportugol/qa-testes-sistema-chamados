# Casos de Teste — BugBank

## Objetivo

Este documento apresenta casos de teste manuais elaborados para o site BugBank,  
utilizado como ambiente de prática no projeto acadêmico de QA/Testes de Software.

O objetivo é validar funcionalidades básicas da aplicação, como cadastro, login,  
validação de campos obrigatórios, transferência e consulta de extrato.

---

## Casos de Teste

| ID | Funcionalidade | Cenário | Pré-condição | Passos | Resultado Esperado | Status |
|---|---|---|---|---|---|---|
| CT-BB-001 | Cadastro | Realizar cadastro com dados válidos | Acessar a página inicial do BugBank | 1. Clicar em Registrar<br>2. Preencher e-mail válido<br>3. Preencher nome<br>4. Preencher senha<br>5. Confirmar senha<br>6. Clicar em Cadastrar | Conta criada com sucesso e mensagem de confirmação exibida | Aprovado |
| CT-BB-002 | Cadastro | Tentar cadastrar sem preencher campos obrigatórios | Acessar a tela de cadastro | 1. Clicar em Registrar<br>2. Não preencher os campos obrigatórios<br>3. Clicar em Cadastrar | O sistema deve exibir mensagens informando os campos obrigatórios | Aprovado |
| CT-BB-003 | Cadastro | Tentar cadastrar com senhas diferentes | Acessar a tela de cadastro | 1. Clicar em Registrar<br>2. Preencher os dados<br>3. Informar senha e confirmação diferentes<br>4. Clicar em Cadastrar | O sistema deve exibir mensagem informando que as senhas não conferem | Aprovado |
| CT-BB-004 | Login | Realizar login com usuário válido | Usuário previamente cadastrado | 1. Informar e-mail válido<br>2. Informar senha válida<br>3. Clicar em Acessar | O sistema deve permitir acesso à conta e exibir a tela inicial do usuário | Aprovado |
| CT-BB-005 | Login | Tentar login com senha inválida | Usuário previamente cadastrado | 1. Informar e-mail válido<br>2. Informar senha inválida<br>3. Clicar em Acessar | O sistema deve exibir mensagem de usuário ou senha inválido | Aprovado |
| CT-BB-006 | Login | Tentar login com campos vazios | Acessar a página inicial do BugBank | 1. Não preencher e-mail e senha<br>2. Clicar em Acessar | O sistema deve exibir mensagens de campo obrigatório | Aprovado |
| CT-BB-007 | Transferência | Realizar transferência com dados válidos | Usuário logado e com saldo disponível | 1. Acessar a opção Transferência<br>2. Informar banco, agência, conta e valor<br>3. Confirmar transferência | Transferência realizada com sucesso e mensagem de confirmação exibida | Aprovado |
| CT-BB-008 | Transferência | Tentar transferir sem informar valor | Usuário logado | 1. Acessar Transferência<br>2. Preencher dados da conta destino<br>3. Deixar valor vazio<br>4. Confirmar transferência | O sistema deve exibir mensagem de validação para o valor obrigatório | Aprovado |
| CT-BB-009 | Extrato | Consultar extrato da conta | Usuário logado | 1. Acessar a opção Extrato | O sistema deve exibir as movimentações da conta | Aprovado |
| CT-BB-010 | Logout | Encerrar sessão do usuário | Usuário logado | 1. Clicar em Sair | O sistema deve encerrar a sessão e retornar para a tela inicial | Aprovado |

---

## Observações

Os casos de teste foram criados com finalidade acadêmica e de portfólio,  
simulando uma documentação básica de QA para uma aplicação web.

Este documento poderá ser atualizado conforme novos cenários forem testados  
e novas evidências forem adicionadas.
