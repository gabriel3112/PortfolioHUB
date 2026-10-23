# Políticas de Segurança e Gestão de Acessos

## 1. Controlo de Acesso e Utilizadores
* **Níveis de Permissão:** Acessos configurados via GitHub Teams/Collaborators com privilégios mínimos necessários[cite: 2, 5].
* **Autenticação:** Exigência de 2FA (Autenticação de Dois Fatores) para todos os colaboradores do repositório.

## 2. Proteção de Ramos (Branch Protection)
* A branch `main` está protegida contra commits diretos[cite: 5].
* Alterações só são aceites através de *Pull Requests* com revisão de código[cite: 5].

## 3. Gestão de Segredos e Variáveis
* Credenciais e tokens de API não são enviados para o repositório (`.gitignore` ativo)[cite: 5].
* Utilização do ficheiro `.env.example` para mapeamento de variáveis de ambiente no desenvolvimento local[cite: 5].