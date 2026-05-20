# Relatório de Bugs — BugBank

## Objetivo

Este documento apresenta exemplos de bugs identificados durante a prática de testes manuais  
no site BugBank, utilizado como ambiente de estudo em QA/Testes de Software.

O objetivo é demonstrar a documentação de defeitos, registrando descrição, passos para reprodução,  
resultado esperado, resultado obtido, severidade, prioridade e status.

---

## Bugs Identificados

| ID | Funcionalidade | Título do Bug | Passos para Reproduzir | Resultado Esperado | Resultado Obtido | Severidade | Prioridade | Status |
|---|---|---|---|---|---|---|---|---|
| BUG-BB-001 | Cadastro | Sistema permite cadastro com e-mail em formato inválido | 1. Acessar o BugBank<br>2. Clicar em Registrar<br>3. Preencher e-mail em formato inválido<br>4. Preencher os demais campos<br>5. Clicar em Cadastrar | O sistema deve validar o formato do e-mail e impedir o cadastro | O sistema permite prosseguir com e-mail inválido | Média | Alta | Aberto |
| BUG-BB-002 | Cadastro | Mensagem de erro pouco clara ao cadastrar com campos vazios | 1. Acessar a tela de cadastro<br>2. Não preencher os campos obrigatórios<br>3. Clicar em Cadastrar | O sistema deve exibir mensagens claras para cada campo obrigatório | O sistema exibe mensagens genéricas ou pouco claras | Baixa | Média | Aberto |
| BUG-BB-003 | Login | Login com campos vazios exibe apenas uma mensagem de obrigatoriedade | 1. Acessar a página inicial<br>2. Deixar e-mail e senha vazios<br>3. Clicar em Acessar | O sistema deve exibir validação para os campos de e-mail e senha | O sistema exibe apenas uma mensagem de campo obrigatório | Baixa | Média | Aberto |
| BUG-BB-004 | Login | Mensagem de erro de login inválido não orienta o usuário | 1. Informar e-mail válido<br>2. Informar senha inválida<br>3. Clicar em Acessar | O sistema deve informar que os dados estão incorretos de forma clara | A mensagem apresentada é genérica e não orienta o usuário | Baixa | Baixa | Aberto |
| BUG-BB-005 | Transferência | Sistema permite tentativa de transferência sem valor preenchido | 1. Realizar login<br>2. Acessar Transferência<br>3. Preencher dados da conta destino<br>4. Deixar valor vazio<br>5. Confirmar transferência | O sistema deve impedir a transferência e solicitar preenchimento do valor | O sistema não valida corretamente o campo valor | Alta | Alta | Aberto |
| BUG-BB-006 | Extrato | Extrato não apresenta detalhes suficientes da movimentação | 1. Realizar login<br>2. Efetuar uma transferência<br>3. Acessar Extrato | O extrato deve exibir informações claras da movimentação, como data, valor e descrição | O extrato apresenta informações incompletas ou pouco detalhadas | Média | Média | Aberto |

---

## Classificação de Severidade

- **Baixa:** problema simples, com baixo impacto na utilização da aplicação.
- **Média:** problema que afeta a experiência do usuário ou uma funcionalidade importante.
- **Alta:** problema que compromete uma funcionalidade principal.
- **Crítica:** problema que impede o uso da aplicação ou pode causar perda de dados.

---

## Classificação de Prioridade

- **Baixa:** pode ser corrigido futuramente.
- **Média:** deve ser corrigido após itens mais urgentes.
- **Alta:** deve ser corrigido com prioridade.
- **Crítica:** deve ser corrigido imediatamente.

---

## Observações

Os bugs descritos neste documento foram registrados com finalidade acadêmica e de portfólio,  
como parte dos estudos em QA/Testes de Software.

Este relatório poderá ser atualizado conforme novos testes forem executados,  
novos comportamentos forem observados e novas evidências forem adicionadas.
