# GitHub Blog

## Curso: Módulo e Desafio HTTP e Performance na Rocketseat (módulo 03)

- **vite**
- **react**
- **typescript**
- **styled-components**

Projeto de um blog usando as issues de um repositório Git como os posts, consumindo a API do github, e montando o app usando `vite` com `react`

---

Para rodar o projeto, depois de clonar o repositório você precisa fazer os passos:

- `$ npm i` para instalar as dependências
- Criar o arquivo `.env.local` onde vamos cadastrar as variáveis de ambiente para configurar o projeto
- Neste arquivo incluir as 3 linhas abaixo:
```
VITE_GITHUB_USER={seu username do github}
VITE_GITHUB_REPO={repo para ser o seu blog}
VITE_GITHUB_TOKEN={seu access token pessoal}
```