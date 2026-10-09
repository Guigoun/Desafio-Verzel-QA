<<<<<<< HEAD
🧪 Desafio Técnico - QA Júnior | VerzelDesafio técnico para a vaga de QA Júnior na Verzel: planejamento e execução de testes funcionais (UI e API), relatórios de bugs com evidências e suíte de automação com Playwright.📌 SumárioSobre o ProjetoTecnologias UtilizadasEstrutura do RepositórioEntregáveis & Relatórios Oficiais1. Cenários de Teste (Planejamento)2. Relatório de Execução dos Testes3. Relatório de Bugs & EvidênciasAutomação de Testes (Playwright)Pré-requisitosInstalaçãoExecutando os TestesVisualizando o Relatório LocalAutor📖 Sobre o ProjetoEste repositório consolida a entrega dos testes funcionais, manuais e automatizados desenvolvidos para o processo seletivo da Verzel. O escopo contemplou a garantia de qualidade de fluxos críticos de e-commerce e integrações:Testes Manuais & Regras de Negócio: Análise exploratória e validação de jornadas completas de usuário (carrinho de compras, cupom de desconto e regras de frete).Testes de API: Validação de endpoints, contratos, payloads e status codes HTTP.Automação de Testes: Criação de suíte de testes ponta a ponta (E2E) e testes de integração de API utilizando Playwright.Gestão de Falhas: Elaboração de documentações com pré-condições, passos de reprodução, severidade/prioridade e evidências visuais.🛠 Tecnologias UtilizadasTecnologiaFinalidadeNode.jsAmbiente de execuçãoPlaywrightFramework de automação E2E e APIPlaywright HTML ReporterRelatórios detalhados com traces, logs e screenshotsGit & GitHubControle de versão e documentação📂 Estrutura do Repositório├── docs/                     # Documentação complementar do projeto
=======
# 🧪 Desafio Técnico - QA Júnior | Verzel

Desafio técnico para a vaga de QA Júnior na Verzel: planejamento e execução de testes funcionais (UI e API), relatórios de bugs com evidências e suíte de automação com Playwright.

---

## 📌 Sumário
- [Sobre o Projeto](#-sobre-o-projeto)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Estrutura do Repositório](#-estrutura-do-repositório)
- [Entregáveis & Relatórios Oficiais](#-entregáveis--relatórios-oficiais)
  - [1. Cenários de Teste (Planejamento)](#1-cenários-de-teste-planejamento)
  - [2. Relatório de Execução dos Testes](#2-relatório-de-execução-dos-testes)
  - [3. Relatório de Bugs & Evidências](#3-relatório-de-bugs--evidências)
- [Automação de Testes (Playwright)](#-automação-de-testes-playwright)
  - [Pré-requisitos](#pré-requisitos)
  - [Instalação](#instalação)
  - [Executando os Testes](#executando-os-testes)
  - [Visualizando o Relatório Local](#visualizando-o-relatório-local)
- [Autor](#-autor)

---

## 📖 Sobre o Projeto
Este repositório consolida a entrega dos testes funcionais, manuais e automatizados desenvolvidos para o processo seletivo da **Verzel**. O escopo contemplou a garantia de qualidade de fluxos críticos de e-commerce e integrações:

- **Testes Manuais & Regras de Negócio:** Análise exploratória e validação de jornadas completas de usuário (carrinho de compras, cupom de desconto e regras de frete).
- **Testes de API:** Validação de endpoints, contratos, payloads e status codes HTTP.
- **Automação de Testes:** Criação de suíte de testes ponta a ponta (E2E) e testes de integração de API utilizando **Playwright**.
- **Gestão de Falhas:** Elaboração de documentações com pré-condições, passos de reprodução, severidade/prioridade e evidências visuais.

---

## 🛠 Tecnologias Utilizadas
| Tecnologia | Finalidade |
|---|---|
| **Node.js** | Ambiente de execução |
| **Playwright** | Framework de automação E2E e API |
| **Playwright HTML Reporter** | Relatórios detalhados com traces, logs e screenshots |
| **Git & GitHub** | Controle de versão e documentação |

---

## 📂 Estrutura do Repositório
```text
├── docs/                     # Documentação complementar do projeto
>>>>>>> 54a50d5 (Atualizando e estilizando README.md)
│   ├── cenarios/             # Matrizes de cenários e casos de teste
│   ├── evidencias/           # Screenshots, vídeos e logs das falhas
│   └── relatorios/           # Relatórios formais de execução e bugs
├── tests/                    # Suíte de testes automatizados
│   ├── e2e/                  # Testes automatizados de UI / E2E
│   ├── api/                  # Testes automatizados de API
│   └── pages/                # Page Object Model (POM)
├── playwright.config.js      # Configurações do Playwright
├── package.json              # Dependências do projeto
└── README.md                 # Documentação principal
<<<<<<< HEAD
📑 Entregáveis & Relatórios Oficiais1. Cenários de Teste (Planejamento)Mapeamento de cenários cobrindo fluxos felizes, alternativos e de exceção das regras de carrinho, frete e cupons.📝 [ESPAÇO RESERVADO: CENÁRIOS DE TESTE]Acesso ao documento: [Inserir link para docs/cenarios/cenarios_de_teste.xlsx ou .pdf]Resumo do escopo planejado:IDMóduloTítulo do CenárioTipoResultado PrevistoCT01CarrinhoAdicionar produto com quantidade válidaFuncionalProduto adicionado ao carrinho com sucessoCT02CupomInserir cupom de desconto expiradoNegócioExibição de mensagem informativa e valor inalteradoCT03FreteCalcular frete com formato de CEP inválidoValidaçãoNotificação imediata de formato incorretoCT04APIConsultar dados de item existenteAPI / ContratoStatus code 200 com payload estruturado2. Relatório de Execução dos TestesConsolidação dos testes executados (manuais e automatizados), métricas de aprovação/falha e cobertura das regras avaliadas.📊 [ESPAÇO RESERVADO: RELATÓRIO DE EXECUÇÃO]Acesso ao relatório completo: [Inserir link para docs/relatorios/relatorio_de_execucao.pdf]Métricas de Execução:Total de Cenários Executados: [Ex: 15]Aprovados (Passed): [Ex: 12]Falhas / Bloqueados (Failed): [Ex: 3]Taxa de Sucesso: [Ex: 80%]🖼️ Print do Relatório / Dashboard (Playwright Report ou Allure):![Dashboard de Execução](./docs/evidencias/dashboard-execucao.png)3. Relatório de Bugs & EvidênciasDocumentação formal dos defeitos encontrados durante os ciclos de validação, contendo passos detalhados para reprodução, severidade, impacto e mídias comprobatórias.🐛 [ESPAÇO RESERVADO: RELATÓRIO DE BUGS]Acesso ao documento consolidado de bugs: [Inserir link para docs/relatorios/relatorio_de_bugs.pdf]🔴 BUG-01: [Título descritivo da falha]Severidade / Prioridade: Alta / AltaMódulo: Cupom / CheckoutPasso a passo:Acessar o carrinho de compras com 1 produto adicionado.No campo de cupom, digitar o código EXPIRADO10 e submeter.Comportamento Esperado: Mensagem indicando que o cupom expirou; o total do pedido não deve sofrer alteração.Comportamento Obtido: O desconto é aplicado indevidamente no total do pedido.Evidência:![Evidência BUG-01](./docs/evidencias/bug-01.png)🟡 BUG-02: [Título descritivo da falha]Severidade / Prioridade: Média / MédiaMódulo: Cálculo de FretePasso a passo:[Passo 1][Passo 2]Comportamento Esperado: [Descrever o esperado]Comportamento Obtido: [Descrever a falha]Evidência:![Evidência BUG-02](./docs/evidencias/bug-02.png)🤖 Automação de Testes (Playwright)Pré-requisitosNode.js (versão 18 LTS ou superior)GitInstalaçãogit clone https://github.com/SEU_USUARIO/Desafio-Verzel-QA.git
cd Desafio-Verzel-QA
npm install
npx playwright install --with-deps
Executando os TestesExecutar todos os testes:npx playwright test
Executar testes em modo interativo (UI Mode):npx playwright test --ui
Executar apenas testes de API:npx playwright test tests/api
Executar apenas testes E2E:npx playwright test tests/e2e
Visualizando o Relatório Localnpx playwright show-report
👤 AutorDesenvolvido por Guilherme LicatiLinkedIn: Meu Perfil no LinkedInGitHub: Meu Perfil no GitHub
=======
```

---

## 📑 Entregáveis & Relatórios Oficiais

### 1. Cenários de Teste (Planejamento)
Mapeamento de cenários cobrindo fluxos felizes, alternativos e de exceção das regras de carrinho, frete e cupons.

> 📝 **[ESPAÇO RESERVADO: CENÁRIOS DE TESTE]**
>
> - **Acesso ao documento:** `[Inserir link para docs/cenarios/cenarios_de_teste.xlsx ou .pdf]`
> - **Resumo do escopo planejado:**
>
> | ID | Módulo | Título do Cenário | Tipo | Resultado Previsto |
> |---|---|---|---|---|
> | `CT01` | Carrinho | Adicionar produto com quantidade válida | Funcional | Produto adicionado ao carrinho com sucesso |
> | `CT02` | Cupom | Inserir cupom de desconto expirado | Negócio | Exibição de mensagem informativa e valor inalterado |
> | `CT03` | Frete | Calcular frete com formato de CEP inválido | Validação | Notificação imediata de formato incorreto |
> | `CT04` | API | Consultar dados de item existente | API / Contrato | Status code 200 com payload estruturado |

---

### 2. Relatório de Execução dos Testes
Consolidação dos testes executados (manuais e automatizados), métricas de aprovação/falha e cobertura das regras avaliadas.

> 📊 **[ESPAÇO RESERVADO: RELATÓRIO DE EXECUÇÃO]**
>
> - **Acesso ao relatório completo:** `[Inserir link para docs/relatorios/relatorio_de_execucao.pdf]`
> - **Métricas de Execução:**
>   - **Total de Cenários Executados:** [Ex: 15]
>   - **Aprovados (Passed):** [Ex: 12]
>   - **Falhas / Bloqueados (Failed):** [Ex: 3]
>   - **Taxa de Sucesso:** [Ex: 80%]
>
> 🖼️ *Print do Relatório / Dashboard (Playwright Report ou Allure):*  
> `![Dashboard de Execução](./docs/evidencias/dashboard-execucao.png)`

---

### 3. Relatório de Bugs & Evidências
Documentação formal dos defeitos encontrados durante os ciclos de validação, contendo passos detalhados para reprodução, severidade, impacto e mídias comprobatórias.

> 🐛 **[ESPAÇO RESERVADO: RELATÓRIO DE BUGS]**
>
> - **Acesso ao documento consolidado de bugs:** `[Inserir link para docs/relatorios/relatorio_de_bugs.pdf]`
>
> #### 🔴 BUG-01: [Título descritivo da falha]
> - **Severidade / Prioridade:** Alta / Alta
> - **Módulo:** Cupom / Checkout
> - **Passo a passo:**
>   1. Acessar o carrinho de compras com 1 produto adicionado.
>   2. No campo de cupom, digitar o código `EXPIRADO10` e submeter.
> - **Comportamento Esperado:** Mensagem indicando que o cupom expirou; o total do pedido não deve sofrer alteração.
> - **Comportamento Obtido:** O desconto é aplicado indevidamente no total do pedido.
> - **Evidência:**  
>   `![Evidência BUG-01](./docs/evidencias/bug-01.png)`
>
> #### 🟡 BUG-02: [Título descritivo da falha]
> - **Severidade / Prioridade:** Média / Média
> - **Módulo:** Cálculo de Frete
> - **Passo a passo:**
>   1. [Passo 1]
>   2. [Passo 2]
> - **Comportamento Esperado:** [Descrever o esperado]
> - **Comportamento Obtido:** [Descrever a falha]
> - **Evidência:**  
>   `![Evidência BUG-02](./docs/evidencias/bug-02.png)`

---

## 🤖 Automação de Testes (Playwright)

### Pré-requisitos
- [Node.js](https://nodejs.org/) (versão 18 LTS ou superior)
- [Git](https://git-scm.com/)

### Instalação
```bash
git clone https://github.com/SEU_USUARIO/Desafio-Verzel-QA.git
cd Desafio-Verzel-QA
npm install
npx playwright install --with-deps
```

### Executando os Testes
- **Executar todos os testes:**
  ```bash
  npx playwright test
  ```
- **Executar testes em modo interativo (UI Mode):**
  ```bash
  npx playwright test --ui
  ```
- **Executar apenas testes de API:**
  ```bash
  npx playwright test tests/api
  ```
- **Executar apenas testes E2E:**
  ```bash
  npx playwright test tests/e2e
  ```

### Visualizando o Relatório Local
```bash
npx playwright show-report
```

---

## 👤 Autor
Desenvolvido por **Guilherme Licati**  
- **LinkedIn:** [Meu Perfil no LinkedIn](https://www.linkedin.com)  
- **GitHub:** [Meu Perfil no GitHub](https://github.com)
>>>>>>> 54a50d5 (Atualizando e estilizando README.md)
