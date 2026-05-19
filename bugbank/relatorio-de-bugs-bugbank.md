# Relatório de Bugs - BugBank

## Bug-BB-001: Sistema permite tentativa de login com campos vazios

**Funcionalidade:** Login  
**Severidade:** Média  
**Prioridade:** Alta  
**Status:** Planejado para validação  

### Descrição

Ao clicar no botão "Acessar" sem preencher os campos de e-mail e senha, o sistema deve exibir mensagens de validação informando que os campos são obrigatórios.

### Passos para reproduzir

1. Acessar o site BugBank
2. Deixar os campos e-mail e senha vazios
3. Clicar no botão "Acessar"

### Resultado esperado

O sistema deve exibir mensagens informando que os campos obrigatórios precisam ser preenchidos.

### Resultado obtido

A validar durante a execução dos testes.

### Evidência

A evidência será adicionada na pasta `bugbank/evidencias/`.

---

## Bug-BB-002: Cadastro com e-mail inválido

**Funcionalidade:** Cadastro de Usuário  
**Severidade:** Média  
**Prioridade:** Alta  
**Status:** Planejado para validação  

### Descrição

O sistema deve validar corretamente o formato do e-mail informado no cadastro de usuário.

### Passos para reproduzir

1. Acessar o site BugBank
2. Clicar em "Registrar"
3. Informar um e-mail em formato inválido
4. Preencher os demais campos obrigatórios
5. Clicar em "Cadastrar"

### Resultado esperado

O sistema deve exibir uma mensagem informando que o e-mail é inválido.

### Resultado obtido

A validar durante a execução dos testes.

### Evidência

A evidência será adicionada na pasta `bugbank/evidencias/`.

---

## Bug-BB-003: Transferência para conta inexistente

**Funcionalidade:** Transferência  
**Severidade:** Alta  
**Prioridade:** Alta  
**Status:** Planejado para validação  

### Descrição

O sistema não deve permitir transferência para uma conta inexistente ou inválida.

### Passos para reproduzir

1. Acessar o BugBank com um usuário válido
2. Clicar em "Transferência"
3. Informar uma conta inexistente
4. Informar um valor para transferência
5. Clicar em "Transferir"

### Resultado esperado

O sistema deve exibir uma mensagem informando que a conta destino é inválida ou inexistente.

### Resultado obtido

A validar durante a execução dos testes.

### Evidência

A evidência será adicionada na pasta `bugbank/evidencias/`.
