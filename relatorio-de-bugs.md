# Relatório de Bugs - Sistema de Chamados

## Bug-001: Sistema permite tentativa de login com campos vazios

**Funcionalidade:** Login  
**Severidade:** Média  
**Prioridade:** Alta  
**Status:** Aberto  

### Descrição

Ao clicar no botão "Entrar" sem preencher os campos de e-mail e senha, o sistema deve exibir mensagens informando que os campos são obrigatórios.

### Passos para reproduzir

1. Acessar a tela de login
2. Deixar os campos e-mail e senha vazios
3. Clicar no botão "Entrar"

### Resultado esperado

O sistema deve exibir mensagens de validação informando que os campos e-mail e senha são obrigatórios.

### Resultado obtido

O sistema permite a tentativa de login sem destacar corretamente os campos obrigatórios.

### Evidência

A evidência será adicionada na pasta `evidencias/`.

---

## Bug-002: Cadastro de chamado sem descrição

**Funcionalidade:** Cadastro de Chamado  
**Severidade:** Alta  
**Prioridade:** Alta  
**Status:** Aberto  

### Descrição

O sistema não deve permitir o cadastro de um chamado sem descrição, pois esse campo é necessário para que a equipe de suporte compreenda o problema relatado.

### Passos para reproduzir

1. Acessar o sistema com um usuário válido
2. Clicar em "Novo Chamado"
3. Preencher o campo título
4. Deixar o campo descrição vazio
5. Clicar em "Salvar"

### Resultado esperado

O sistema deve exibir uma mensagem informando que a descrição é obrigatória.

### Resultado obtido

O sistema permite o cadastro do chamado sem descrição.

### Evidência

A evidência será adicionada na pasta `evidencias/`.

---

## Bug-003: Filtro de chamados não retorna mensagem quando não há resultados

**Funcionalidade:** Consulta de Chamados  
**Severidade:** Baixa  
**Prioridade:** Média  
**Status:** Aberto  

### Descrição

Ao pesquisar por um chamado inexistente, o sistema deve informar que nenhum chamado foi encontrado.

### Passos para reproduzir

1. Acessar o sistema com um usuário válido
2. Entrar na tela "Meus Chamados"
3. Pesquisar por um número de chamado inexistente

### Resultado esperado

O sistema deve exibir a mensagem: "Nenhum chamado encontrado."

### Resultado obtido

O sistema não apresenta nenhuma mensagem ao usuário.

### Evidência

A evidência será adicionada na pasta `evidencias/`.
