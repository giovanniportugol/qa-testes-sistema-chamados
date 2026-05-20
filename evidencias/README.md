# Evidências de Testes — Sistema de Chamados

## Objetivo

Esta pasta tem como objetivo organizar as evidências dos testes manuais realizados  
no sistema fictício de chamados.

As evidências são utilizadas para demonstrar a execução dos testes, registrar os resultados obtidos  
e apoiar a documentação dos casos de teste e bugs encontrados.

---

## Tipos de Evidências

As evidências podem incluir:

- Capturas de tela dos testes executados
- Registros de resultados esperados e obtidos
- Prints de mensagens de erro
- Prints de validações de campos obrigatórios
- Prints de chamados criados, atualizados, concluídos ou arquivados
- Anotações sobre comportamento observado durante os testes

---

## Organização Sugerida

As evidências podem ser organizadas por caso de teste ou funcionalidade.

Exemplo:

```txt
evidencias/
├── CT-001-abertura-chamado-dados-validos.png
├── CT-002-validacao-titulo-obrigatorio.png
├── CT-003-validacao-descricao-obrigatoria.png
├── CT-004-listagem-chamados.png
├── BUG-001-chamado-sem-descricao.png
└── README.md
