# Evidências de Testes — BugBank

## Objetivo

Esta pasta tem como objetivo organizar as evidências dos testes manuais realizados  
no site BugBank, como parte do projeto acadêmico de QA/Testes de Software.

As evidências servem para demonstrar a execução dos testes, registrar os resultados obtidos  
e apoiar a documentação dos casos de teste e bugs identificados.

---

## Tipos de Evidências

As evidências podem incluir:

- Capturas de tela dos testes executados
- Prints de mensagens de erro
- Prints de validação de campos obrigatórios
- Prints de cadastro de usuário
- Prints de login
- Prints de transferência
- Prints de consulta de extrato
- Registros de comportamento observado durante os testes

---

## Organização Sugerida

As evidências podem ser organizadas por caso de teste, bug ou funcionalidade.

Exemplo:

```txt
bugbank/evidencias/
├── CT-BB-001-cadastro-com-dados-validos.png
├── CT-BB-002-cadastro-campos-obrigatorios.png
├── CT-BB-004-login-com-sucesso.png
├── CT-BB-005-login-senha-invalida.png
├── CT-BB-007-transferencia-com-sucesso.png
├── BUG-BB-001-email-invalido.png
├── BUG-BB-005-transferencia-sem-valor.png
└── README.md
