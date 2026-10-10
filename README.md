# 🛒 Desafio Técnico QA Júnior — Verzel Store

Repositório desenvolvido para o processo seletivo da vaga de **Quality Assurance (QA) Júnior** da empresa **Verzel**.  
O projeto engloba planejamento e execução de testes manuais, testes funcionais de interface web (UI), testes de integração de API REST, documentação formal de defeitos (Bug Reports) e suíte automatizada ponta a ponta desenvolvida com **Playwright** e **TypeScript**.

---

## 📁 Estrutura do Projeto

A organização de diretórios e artefatos do repositório segue o padrão abaixo:

```text
verzel-store/
├── cenarios_teste/
│   └── Cenario de teste Verzel.xlsx              # Matriz de cenários (UI e API)
├── evidencias-relatorios/
│   ├── Relatório de Bugs Verzel.docx             # Documentação detalhada dos defeitos encontrados
│   ├── Relatorio Execucao Testes API Verzel.docx # Evidências, payloads e respostas da API
│   └── Relatorio Execucao Testes UI Verzel.docx  # Evidências passo a passo e capturas de tela (UI)
├── tests/
│   ├── api/
│   │   └── api-verzel.spec.ts                   # Automação de testes de API REST
│   └── ui/
│       └── checkout-e2e.spec.ts                 # Automação E2E do fluxo de compras / UI
├── playwright-report/                           # Relatório HTML gerado pelo Playwright
├── playwright.config.ts                         # Configurações globais do Playwright
├── package.json                                 # Dependências e scripts do projeto
└── README.md                                    # Documentação principal
```

---

## 📑 Documentação e Relatórios de Testes

Todos os planos de teste, evidências de execução e relatórios de defeitos encontram-se organizados e versionados nas respectivas pastas:

- OBS: O GitHub não renderiza nem abre documentos do Microsoft Word (.docx) ou Excel (.xlsx), logo após clicar no relatório/cenário que deseja visualizar
aprecerá um texto "View raw", clique nele para baixar o documento desejado.

### 📊 1. Planeamento e Cenários de Teste
- 📑 Cenários de Teste Consolidados  (https://docs.google.com/spreadsheets/d/1MVcdAe9ziYFKl1_nwAW6pWeD1wCTmZJ0VLFSr90DTw8/edit?usp=sharing)    
  *Matriz completa de testes contendo identificadores padronizados (`CT-UI-01` a `CT-UI-34` e `CT-API-01` a `CT-API-12`), módulos (Catálogo, Carrinho e Finalizar Compra), passos descritos em BDD (Gherkin), resultados esperados e resultados obtidos.*

### 🔍 2. Relatórios de Execução e Evidências
- 🌐 **Relatório de Execução — Testes de API  (https://docs.google.com/document/d/1gN-L-Ytg5nRtU3KXObOn7fFp0oxlYdLvX6b0tI_7fyI/edit?usp=sharing)    
  *Validação de endpoints e regras de negócio, testes de status HTTP (200, 201, 404, 422), payloads de envio (JSON) e capturas de ecrã das respostas no Postman.*
- 🖥️ Relatório de Execução — Testes de UI  (https://docs.google.com/document/d/1UkLhxUUqGyQQ5_WUMERsz92TtslciTeG09tRiJD4dAE/edit?usp=sharing)    
  *Documentação visual com capturas de ecrã passo a passo evidenciando as validações funcionais no fluxo de catálogo, carrinho, cálculo de frete e finalização de pedido.*

### 🐛 3. Gestão de Bugs (Defeitos Encontrados)
- 🐞 Relatório de Bugs  (https://docs.google.com/document/d/1wVAIJVfDxkbdHSlS8eed_6fMjYNPOZ5Q0MpiF61kgCE/edit?usp=sharing)    
  *Registo formal dos defeitos encontrados, com severidade, prioridade, passos para reprodução, resultados esperados vs. obtidos e evidências:*
  * **`BUG-01`**: Frete grátis não é aplicado em pedidos com o subtotal igual a R$ 200,00 (`CT-UI-14` / `CT-UI-33`).
  * **`BUG-02`**: API permite cálculo de carrinho com quantidade de produto acima do limite máximo permitido (`CT-API-07`).

---

## 🛠️ Tecnologias e Ferramentas Utilizadas

* **Linguagem & Ambiente:** Node.js, TypeScript
* **Automação de Testes:** [Playwright Test](https://playwright.dev/)
* **Testes Manuais de API:** Postman
* **Planejamento & Rastreabilidade:** Microsoft Excel (.xlsx), Microsoft Word (.docx)
* **Padrões de Escrita:** BDD / Gherkin (`Dado / Quando / Então`)

---

## 🚀 Como Executar os Testes Automatizados

### Pré-requisitos
* [Node.js](https://nodejs.org/) instalado (versão 18 ou superior)
* Git instalado

### 1. Clonar o repositório
```bash
git clone https://github.com/SEU-USUARIO/verzel-store.git
cd verzel-store
```

### 2. Instalar as dependências
```bash
npm install
```

### 3. Instalar os navegadores do Playwright
```bash
npx playwright install --with-deps
```

### 4. Executar os Testes

* **Executar toda a suíte de testes (UI e API):**
  ```bash
  npx playwright test
  ```

* **Executar apenas os testes de API:**
  ```bash
  npx playwright test tests/api/
  ```

* **Executar apenas os testes de UI (End-to-End):**
  ```bash
  npx playwright test tests/ui/
  ```

* **Executar em modo interativo com interface visual (UI Mode):**
  ```bash
  npx playwright test --ui
  ```

### 5. Visualizar o Relatório de Execução
Após a execução dos testes automatizados, visualize o relatório gerado:
```bash
npx playwright show-report
```
