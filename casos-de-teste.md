# 🧪 Casos de Teste — Sistema de Chamados

## Objetivo

Este documento reúne os casos de teste elaborados para validar as principais funcionalidades do Sistema de Chamados.

Os cenários foram desenvolvidos com base em boas práticas de **Quality Assurance (QA)**, permitindo verificar o comportamento esperado da aplicação em diferentes situações de uso.

Os casos de teste contemplam cenários positivos, negativos e validações de regras de negócio, contribuindo para a identificação de defeitos, prevenção de falhas e garantia da qualidade do software.

Cada caso de teste possui um identificador único (ID), descrição da funcionalidade, cenário, pré-condições, passos para execução, resultado esperado e status da validação, proporcionando rastreabilidade, organização e facilidade de manutenção da documentação.

Este documento faz parte do portfólio desenvolvido para demonstrar conhecimentos em documentação de testes, planejamento, execução e registro de evidências, simulando atividades realizadas por profissionais de Quality Assurance em projetos reais de desenvolvimento de software.

---

## Casos de Teste

| ID | Funcionalidade | Cenário | Pré-condição | Passos | Resultado Esperado | Status |
|---|---|---|---|---|---|---|
| CT-001 | Abertura de chamado | Criar chamado com dados válidos | Sistema disponível | 1. Acessar o sistema<br>2. Preencher título, descrição e categoria<br>3. Clicar em abrir chamado | O chamado deve ser criado com sucesso e receber um ID único | Aprovado |
| CT-002 | Abertura de chamado | Tentar criar chamado sem título | Sistema disponível | 1. Acessar o sistema<br>2. Deixar o campo título vazio<br>3. Preencher os demais campos<br>4. Clicar em abrir chamado | O sistema deve exibir mensagem informando que o título é obrigatório | Aprovado |
| CT-003 | Abertura de chamado | Tentar criar chamado sem descrição | Sistema disponível | 1. Acessar o sistema<br>2. Preencher o título<br>3. Deixar a descrição vazia<br>4. Clicar em abrir chamado | O sistema deve exibir mensagem informando que a descrição é obrigatória | Aprovado |
| CT-004 | Listagem de chamados | Visualizar chamados cadastrados | Existir ao menos um chamado criado | 1. Acessar a lista de chamados | O sistema deve exibir os chamados cadastrados com ID, título, status e categoria | Aprovado |
| CT-005 | Atualização de status | Alterar status de chamado aberto para em andamento | Existir chamado com status aberto | 1. Selecionar um chamado aberto<br>2. Alterar status para em andamento<br>3. Salvar alteração | O status do chamado deve ser atualizado para em andamento | Aprovado |
| CT-006 | Conclusão de chamado | Finalizar chamado em andamento | Existir chamado com status em andamento | 1. Selecionar chamado em andamento<br>2. Alterar status para concluído<br>3. Salvar alteração | O chamado deve ser marcado como concluído | Aprovado |
| CT-007 | Arquivamento de chamado | Arquivar chamado concluído | Existir chamado concluído | 1. Selecionar chamado concluído<br>2. Clicar em arquivar | O chamado deve ser arquivado e removido da lista principal | Aprovado |
| CT-008 | Consulta de chamado | Buscar chamado pelo ID | Existir chamado cadastrado | 1. Informar o ID do chamado<br>2. Executar a busca | O sistema deve retornar o chamado correspondente ao ID informado | Aprovado |
| CT-009 | Consulta de chamado | Buscar chamado inexistente | Sistema disponível | 1. Informar um ID inexistente<br>2. Executar a busca | O sistema deve informar que nenhum chamado foi encontrado | Aprovado |
| CT-010 | Validação de campos | Tentar abrir chamado sem preencher campos obrigatórios | Sistema disponível | 1. Acessar o sistema<br>2. Não preencher nenhum campo<br>3. Clicar em abrir chamado | O sistema deve exibir mensagens de validação para os campos obrigatórios | Aprovado |

---

## Observações

Os casos de teste foram criados com finalidade acadêmica e de portfólio,  
simulando cenários básicos de validação em um sistema de chamados.

Este documento poderá ser atualizado conforme novos cenários, melhorias  
e funcionalidades forem adicionados ao projeto.
