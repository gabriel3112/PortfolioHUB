# Registo de Interações e Prompts - Google GEMINI

Este documento regista os prompts e orientações do Google GEMINI durante o planeamento e implantação do PortfolioHUB[cite: 1, 4].

---

### Prompt 1: Planeamento e Estrutura do Projeto
* **Objetivo:** Definir o plano de implantação e a organização do código[cite: 4].
* **Entrada (Prompt):**
  > *"Atua como Arquiteto de Software. Ajuda-me a definir o plano de implantação e a estrutura de pastas ideal para a plataforma PortfolioHUB, garantindo boas práticas de organização e documentação[cite: 2, 4]."*
* **Resultado Obtido:** Estrutura modular definida em `src/`, `docs/` e `.github/`, facilitando a manutenção e a integração com o GitHub[cite: 4].

---

### Prompt 2: Diretrizes de Segurança e Controlo de Acesso
* **Objetivo:** Estabelecer políticas de segurança para o repositório e gestão de utilizadores[cite: 5].
* **Entrada (Prompt):**
  > *"Quais são as melhores práticas de segurança para proteger a branch main no GitHub, gerir acessos de colaboradores e evitar a exposição acidental de credenciais num projeto web[cite: 5]?"*
* **Resultado Obtido:** Implementação de ficheiros `.gitignore` e `.env.example`, além de regras de proteção de branch (`main`) com necessidade de aprovação por Pull Request[cite: 5].
