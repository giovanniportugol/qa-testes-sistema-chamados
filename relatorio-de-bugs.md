# Relatório de Bugs — Sistema de Chamados

## Objetivo

Este documento apresenta exemplos de bugs identificados durante os testes manuais  
de um sistema fictício de chamados.

O objetivo é demonstrar a prática de registro de defeitos, incluindo descrição,  
passos para reprodução, resultado esperado, resultado obtido, severidade, prioridade e status.

---

## Bugs Identificados

| ID | Funcionalidade | Título do Bug | Passos para Reproduzir | Resultado Esperado | Resultado Obtido | Severidade | Prioridade | Status |
|---|---|---|---|---|---|---|---|---|
| BUG-001 | Abertura de chamado | Sistema permite abrir chamado sem descrição | 1. Acessar o sistema<br>2. Preencher apenas o título<br>3. Deixar a descrição vazia<br>4. Clicar em abrir chamado | O sistema deve exibir mensagem informando que a descrição é obrigatória | O chamado é criado mesmo sem descrição | Média | Alta | Aberto |
| BUG-002 | Abertura de chamado | Campo título aceita apenas espaços em branco | 1. Acessar o sistema<br>2. Digitar apenas espaços no campo título<br>3. Preencher os demais campos<br>4. Clicar em abrir chamado | O sistema deve validar o campo e impedir o cadastro com título vazio | O chamado é criado com título sem conteúdo válido | Média | Média | Aberto |
| BUG-003 | Consulta de chamado | Busca por ID inexistente não exibe mensagem clara | 1. Acessar a consulta de chamados<br>2. Informar um ID inexistente<br>3. Executar a busca | O sistema deve informar que nenhum chamado foi encontrado | O sistema não retorna mensagem clara ao usuário | Baixa | Média | Aberto |
| BUG-004 | Atualização de status | Status do chamado não é atualizado após salvar | 1. Selecionar um chamado aberto<br>2. Alterar status para em andamento<br>3. Salvar alteração<br>4. Atualizar a página | O status deve permanecer como em andamento | O status volta para aberto após atualizar a página | Alta | Alta | Aberto |
| BUG-005 | Arquivamento de chamado | Chamado arquivado continua aparecendo na lista principal | 1. Selecionar chamado concluído<br>2. Clicar em arquivar<br>3. Voltar para a lista principal | O chamado arquivado deve ser removido da lista principal | O chamado continua visível na lista principal | Média | Média | Aberto |

---

## Classificação de Severidade

- **Baixa:** problema simples, sem impacto crítico no uso do sistema.
- **Média:** problema que afeta uma funcionalidade importante, mas possui alternativa de uso.
- **Alta:** problema que compromete diretamente uma funcionalidade principal.
- **Crítica:** problema que impede o uso do sistema ou causa perda de dados.

---

## Classificação de Prioridade

- **Baixa:** pode ser corrigido futuramente.
- **Média:** deve ser corrigido após os itens mais urgentes.
- **Alta:** deve ser corrigido com prioridade, pois impacta funcionalidades importantes.
- **Crítica:** deve ser corrigido imediatamente.

---

## Observações

Os bugs descritos neste documento são exemplos acadêmicos, criados para fins de estudo  
e composição de portfólio em QA/Testes de Software.

Este relatório poderá ser atualizado conforme novos cenários forem adicionados ao projeto.
