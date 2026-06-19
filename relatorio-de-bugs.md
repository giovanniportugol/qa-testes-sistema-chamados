# Relatório de Bugs — Sistema de Chamados

## Objetivo

Este documento apresenta exemplos de bugs identificados durante a execução de testes funcionais manuais em um sistema fictício de chamados.

O objetivo é demonstrar a prática de registro e acompanhamento de defeitos, incluindo descrição do problema, passos para reprodução, resultado esperado, resultado obtido, severidade, prioridade e status.

---

## Ambiente de Teste

* Sistema: Sistema de Chamados
* Versão: 1.0
* Tipo de Teste: Teste Funcional Manual
* Navegador: Google Chrome
* Sistema Operacional: Windows 11
* Data da Execução: Junho/2026
* Executor dos Testes: Giovanni de Souza Gomes

---

## Bugs Identificados

| ID      | Funcionalidade          | Título do Bug                                            | Passos para Reproduzir                                                                                                           | Resultado Esperado                                                      | Resultado Obtido                                     | Severidade | Prioridade | Status |
| ------- | ----------------------- | -------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- | ---------------------------------------------------- | ---------- | ---------- | ------ |
| BUG-001 | Abertura de chamado     | Sistema permite abrir chamado sem descrição              | 1. Acessar o sistema<br>2. Preencher apenas o título<br>3. Deixar a descrição vazia<br>4. Clicar em abrir chamado                | O sistema deve exibir mensagem informando que a descrição é obrigatória | O chamado é criado mesmo sem descrição               | Média      | Alta       | Aberto |
| BUG-002 | Abertura de chamado     | Campo título aceita apenas espaços em branco             | 1. Acessar o sistema<br>2. Digitar apenas espaços no campo título<br>3. Preencher os demais campos<br>4. Clicar em abrir chamado | O sistema deve validar o campo e impedir o cadastro com título vazio    | O chamado é criado com título sem conteúdo válido    | Média      | Média      | Aberto |
| BUG-003 | Consulta de chamado     | Busca por ID inexistente não exibe mensagem clara        | 1. Acessar a consulta de chamados<br>2. Informar um ID inexistente<br>3. Executar a busca                                        | O sistema deve informar que nenhum chamado foi encontrado               | O sistema não retorna mensagem clara ao usuário      | Baixa      | Média      | Aberto |
| BUG-004 | Atualização de status   | Status do chamado não é atualizado após salvar           | 1. Selecionar um chamado aberto<br>2. Alterar status para Em Andamento<br>3. Salvar alteração<br>4. Atualizar a página           | O status deve permanecer como Em Andamento                              | O status retorna para Aberto após atualizar a página | Alta       | Alta       | Aberto |
| BUG-005 | Arquivamento de chamado | Chamado arquivado continua aparecendo na lista principal | 1. Selecionar chamado concluído<br>2. Clicar em Arquivar<br>3. Retornar para a lista principal                                   | O chamado arquivado deve ser removido da lista principal                | O chamado continua visível na lista principal        | Média      | Média      | Aberto |

---

## Resumo dos Defeitos

| Indicador        | Quantidade |
| ---------------- | ---------- |
| Total de Bugs    | 5          |
| Severidade Alta  | 1          |
| Severidade Média | 3          |
| Severidade Baixa | 1          |
| Prioridade Alta  | 2          |
| Prioridade Média | 3          |
| Status Aberto    | 5          |

### Conclusão

Durante a execução dos testes funcionais foram identificados defeitos relacionados à validação de campos obrigatórios, persistência de dados e experiência do usuário.

Os registros documentados demonstram a aplicação de técnicas de teste manual, análise de comportamento do sistema e controle de defeitos em um ambiente de estudo voltado para Qualidade de Software.

---

## Classificação de Severidade

* **Baixa:** problema simples, sem impacto crítico no uso do sistema.
* **Média:** problema que afeta uma funcionalidade importante, mas possui alternativa de uso.
* **Alta:** problema que compromete diretamente uma funcionalidade principal.
* **Crítica:** problema que impede o uso do sistema ou causa perda de dados.

---

## Classificação de Prioridade

* **Baixa:** pode ser corrigido futuramente.
* **Média:** deve ser corrigido após os itens mais urgentes.
* **Alta:** deve ser corrigido com prioridade, pois impacta funcionalidades importantes.
* **Crítica:** deve ser corrigido imediatamente.

---

## Observações

Os defeitos registrados neste documento representam cenários simulados para fins acadêmicos e de composição de portfólio em Qualidade de Software (QA).

A documentação foi elaborada seguindo práticas comuns de registro e acompanhamento de defeitos utilizadas em processos de testes de software.

Este relatório poderá ser atualizado com novos cenários, evidências e resultados de execução conforme a evolução do projeto.
