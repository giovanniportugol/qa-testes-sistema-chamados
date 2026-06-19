# Matriz de Rastreabilidade — Sistema de Chamados

## Objetivo

Este documento apresenta a matriz de rastreabilidade do sistema fictício de chamados, utilizado como projeto acadêmico em desenvolvimento para estudos em QA/Testes de Software.

A matriz tem como objetivo relacionar requisitos, casos de teste, bugs encontrados e status de validação, demonstrando organização, rastreabilidade e controle durante o processo de testes.

---

## Matriz de Rastreabilidade

| ID do Requisito | Descrição do Requisito                                           | Caso de Teste Relacionado | Bug Relacionado | Status   |
| --------------- | ---------------------------------------------------------------- | ------------------------- | --------------- | -------- |
| RF-001          | O sistema deve permitir a abertura de chamados com dados válidos | CT-001                    | -               | Validado |
| RF-002          | O sistema deve validar o preenchimento obrigatório do título     | CT-002, CT-010            | BUG-002         | Com bug  |
| RF-003          | O sistema deve validar o preenchimento obrigatório da descrição  | CT-003, CT-010            | BUG-001         | Com bug  |
| RF-004          | O sistema deve listar os chamados cadastrados                    | CT-004                    | -               | Validado |
| RF-005          | O sistema deve permitir a alteração do status do chamado         | CT-005                    | BUG-004         | Com bug  |
| RF-006          | O sistema deve permitir a conclusão de chamados em andamento     | CT-006                    | -               | Validado |
| RF-007          | O sistema deve permitir o arquivamento de chamados concluídos    | CT-007                    | BUG-005         | Com bug  |
| RF-008          | O sistema deve permitir a busca de chamados por ID               | CT-008, CT-009            | BUG-003         | Com bug  |

---

## Legenda de Status

* **Validado:** requisito testado e aprovado nos cenários definidos.
* **Com bug:** requisito testado, mas com defeito identificado.
* **Pendente:** requisito ainda não testado.
* **Em análise:** requisito precisa de revisão ou complemento.

---

## Requisitos Funcionais Considerados

| ID     | Requisito                                      | Prioridade |
| ------ | ---------------------------------------------- | ---------- |
| RF-001 | Permitir abertura de chamado com dados válidos | Alta       |
| RF-002 | Validar campo obrigatório de título            | Alta       |
| RF-003 | Validar campo obrigatório de descrição         | Alta       |
| RF-004 | Listar chamados cadastrados                    | Média      |
| RF-005 | Alterar status do chamado                      | Alta       |
| RF-006 | Concluir chamado em andamento                  | Média      |
| RF-007 | Arquivar chamado concluído                     | Média      |
| RF-008 | Buscar chamado por ID                          | Média      |

---

## Cobertura dos Testes

| Indicador                | Quantidade |
| ------------------------ | ---------- |
| Requisitos Funcionais    | 8          |
| Casos de Teste           | 10         |
| Bugs Registrados         | 5          |
| Requisitos Validados     | 3          |
| Requisitos com Bug       | 5          |
| Cobertura dos Requisitos | 100%       |

A cobertura dos requisitos foi realizada por meio dos casos de teste definidos para o projeto.

Todos os requisitos funcionais identificados foram associados a pelo menos um caso de teste, garantindo rastreabilidade completa entre requisitos, cenários de teste e defeitos encontrados.

---

## Conclusão

Todos os requisitos funcionais definidos para o Sistema de Chamados foram cobertos por casos de teste e avaliados durante a execução dos testes funcionais.

A matriz demonstra a rastreabilidade entre requisitos, cenários de teste e defeitos encontrados, permitindo acompanhar a cobertura dos testes e o impacto dos bugs identificados.

Este documento complementa os artefatos de QA do projeto, incluindo Plano de Testes, Casos de Teste e Relatório de Bugs.

A utilização da matriz de rastreabilidade contribui para a organização das atividades de teste, melhoria da cobertura dos requisitos e controle da qualidade do sistema.

---

## Observações

Esta matriz foi criada com finalidade acadêmica e de portfólio, simulando o controle entre requisitos, casos de teste e bugs encontrados.

O documento poderá ser atualizado conforme novos requisitos, cenários de teste e defeitos forem adicionados ao projeto.

A documentação segue conceitos de rastreabilidade utilizados em processos de Garantia da Qualidade de Software (QA), permitindo visualizar a relação entre requisitos, testes executados e defeitos identificados.
