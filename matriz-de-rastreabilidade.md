# Matriz de Rastreabilidade — Sistema de Chamados

## Objetivo

Este documento apresenta a matriz de rastreabilidade do sistema fictício de chamados,  
utilizado como projeto acadêmico em desenvolvimento para estudos em QA/Testes de Software.

A matriz tem como objetivo relacionar requisitos, casos de teste, bugs encontrados  
e status de validação, demonstrando organização e controle durante o processo de testes.

---

## Matriz de Rastreabilidade

| ID do Requisito | Descrição do Requisito | Caso de Teste Relacionado | Bug Relacionado | Status |
|---|---|---|---|---|
| RF-001 | O sistema deve permitir a abertura de chamados com dados válidos | CT-001 | - | Validado |
| RF-002 | O sistema deve validar o preenchimento obrigatório do título | CT-002, CT-010 | BUG-002 | Com bug |
| RF-003 | O sistema deve validar o preenchimento obrigatório da descrição | CT-003, CT-010 | BUG-001 | Com bug |
| RF-004 | O sistema deve listar os chamados cadastrados | CT-004 | - | Validado |
| RF-005 | O sistema deve permitir a alteração do status do chamado | CT-005 | BUG-004 | Com bug |
| RF-006 | O sistema deve permitir a conclusão de chamados em andamento | CT-006 | - | Validado |
| RF-007 | O sistema deve permitir o arquivamento de chamados concluídos | CT-007 | BUG-005 | Com bug |
| RF-008 | O sistema deve permitir a busca de chamados por ID | CT-008, CT-009 | BUG-003 | Com bug |

---

## Legenda de Status

- **Validado:** requisito testado e aprovado nos cenários definidos.
- **Com bug:** requisito testado, mas com defeito identificado.
- **Pendente:** requisito ainda não testado.
- **Em análise:** requisito precisa de revisão ou complemento.

---

## Requisitos Funcionais Considerados

| ID | Requisito |
|---|---|
| RF-001 | Permitir abertura de chamado com dados válidos |
| RF-002 | Validar campo obrigatório de título |
| RF-003 | Validar campo obrigatório de descrição |
| RF-004 | Listar chamados cadastrados |
| RF-005 | Alterar status do chamado |
| RF-006 | Concluir chamado em andamento |
| RF-007 | Arquivar chamado concluído |
| RF-008 | Buscar chamado por ID |

---

## Observações

Esta matriz foi criada com finalidade acadêmica e de portfólio,  
simulando o controle entre requisitos, casos de teste e bugs encontrados.

O documento poderá ser atualizado conforme novos requisitos, cenários de teste  
e defeitos forem adicionados ao projeto.
