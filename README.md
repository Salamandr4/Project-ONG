## 🌍 Plataforma Web para ONGs — Projeto Acadêmico
Curso de Ciência da Computação — Universidade Cruzeiro do Sul
Disciplina: Experiências Práticas I – Fundamentos da Web e Estruturação de Interfaces

## Aluno - Vinícius Campacci

## Descrição do Projeto
Este projeto tem como objetivo o desenvolvimento de uma plataforma web responsiva para ONGs, criada para conectar voluntários, doadores e administradores, promovendo o engajamento social e a transparência nas ações.

O sistema foi desenvolvido utilizando HTML5, CSS3 e JavaScript puro, aplicando conceitos de estrutura semântica, acessibilidade, SEO e responsividade, conforme as diretrizes da disciplina.

O projeto foi desenvolvido como parte de um trabalho acadêmico, simulando um ambiente profissional e aplicando metodologias ágeis.

---

## Objetivos

- Implementar uma estrutura **semântica HTML5 completa**, demonstrando domínio dos fundamentos estudados.
- Criar um **layout visual moderno**, **acessível** e **responsivo**, com foco em UX/UI.
- Desenvolver funcionalidades de formulário com validações **HTML5** e **máscaras JavaScript.**
- Aplicar boas práticas de **otimização**, **acessibilidade** e **SEO.**
- Simular um ambiente profissional de desenvolvimento, seguindo **metodologias ágeis** e **organização de pastas.**
- Apresentar conhecimento de **Git/GitHub**, conformidade com **WCAG 2.1**, **otimização para produção e documentação técnica.**
- Implementar um **modo claro e modo escuro**, seguindo diretrizes de acessibilidade.

---

## Funcionalidades Principais

## Página Inicial (`index.html`)
- Hero institucional com **mensagem de impacto e CTA**.  
- Exibição da **missão, visão e valores** da ONG.  
- Seção de **estatísticas de impacto social**.  
- **Projetos em destaque** com efeitos hover e botões interativos.  
- Novo **botão de alternância de tema** 
  - Ao clicar, o site automaticamente atualiza para o modo claro/escuro, salvando a preferência do usuário.
  - Permite alternar o visual do site sem recarregar a página.

## Página de Projetos (`projetos.html`)
- Grade com **seis projetos**, distribuídos em duas linhas.  
- **Filtro por categoria** para facilitar a navegação.  
- Cards com **imagens, descrições** e **links para cadastro**.  
- Layout **totalmente responsivo** e harmônico.

## Página de Cadastro (`cadastro.html`)
- Formulário completo com os seguintes campos:
- Nome completo  
- E-mail  
- CPF  
- Telefone  
- Data de nascimento  
- Endereço  
- CEP  
- Cidade e Estado  
- **Validação nativa HTML5** com atributos `required`, `type` e `pattern`.  
- **Máscaras de input com JavaScript puro**.  
- Layout centralizado, limpo e acessível em todos os dispositivos.

## Página de Confirmacao (`confirmacao.html`)
- Inclui um **botão de retorno** à página inicial.
- Página exibida após o envio bem-sucedido do formulário de cadastro.
- Apresenta uma mensagem de **sucesso animada**, confirmando o recebimento das informações do usuário.
- Contém um layout centralizado e responsivo, utilizando componentes visuais consistentes com o restante do site.
- A seção principal é construída com foco em feedback positivo e acessibilidade, garantindo contraste e clareza na leitura.
- Implementa animação fadeIn, criando uma transição suave entre o carregamento e a exibição da mensagem.
- O cabeçalho mantém o mesmo botão de alternância de tema (modo claro/escuro) presente nas outras páginas, assegurando persistência da experiência visual em todo o site.
- Totalmente compatível com o **sistema de design do projeto**.

---

- **Integração DOM aprimorada:**  
  A lógica de validação é controlada pelo arquivo `validacao.js`, que utiliza manipulação de elementos via DOM para alterar o estado visual e textual dos campos conforme as ações do usuário.

---

## Design System

| Elemento | Especificação |
|-----------|---------------|
| **Cores** | Gradiente verde e azul, simbolizando esperança e confiança |
| **Tipografia** | Hierarquia de títulos clara e legível, com contraste equilibrado |
| **Componentes** | Cards com sombras suaves e botões com transições e efeitos hover |
| **Layout** | Grid responsivo, margens “respiradas” e espaçamentos equilibrados |
| **Acessibilidade** | Contraste mínimo 4.5:1 e suporte à navegação por teclado |
| **Modo Escuro** | Implementação de tema alternativo com alto contraste, acessível e agradável |

---

## Requisitos Técnicos Atendidos

- **HTML5 Semântico:** uso correto de `header`, `main`, `section`, `article` e `footer`.  
- **Responsividade:** design mobile-first, adaptável a qualquer dispositivo.  
- **Formulários Interativos:** inputs com validação HTML5 e feedback DOM em tempo real.  
- **Acessibilidade:** contraste adequado, labels descritivas e navegação intuitiva.  
- **SEO e Performance:** meta tags otimizadas e estrutura leve.  
- **Organização:** pastas estruturadas (`/css`, `/js`, `/assets`, `/images`).  
- **Git/GitHub:** versionamento contínuo com commits semânticos e histórico rastreável.  
- **WCAG 2.1:** suporte a leitores de tela e contraste acessível.  
- **Modo Claro e Escuro:** alternância dinâmica de tema sem recarregar a página.

---

## Tecnologias Utilizadas

- **HTML5** → Estrutura semântica e formulários complexos  
- **CSS3** → Layout moderno, responsivo e animado  
- **JavaScript Puro** → Interatividade, máscaras de input e efeitos dinâmicos
- **Git e GitHub** → Versionamento e deploy contínuo  
- **GitHub Pages** → Hospedagem do projeto

## Estrutura do Projeto

📁 Project-ONG/
┣ 📄 index.html
┣ 📄 projetos.html
┣ 📄 cadastro.html
┣ 📄 confirmacao.html
┣ 📁 css/
┃ ┗ 📄 style.css
┣ 📁 js/
┃ ┣ 📄 validacao.js
┃ ┗ 📄 scripts.js
┣ 📁 assets/
┗ 📄 README.md

---

## Versao Atual

- **Versao Atual** → v1.2.0
- **Historico de Versoes**
    - v1.0.0 → Primeiro release publico com as páginas Inicio, Projetos e Cadastro.
    - v1.1.0 → Implementacao da pagina Confirmacao, validacao.js e otimizacao das imagens e icons.
    - v1.2.0 → Criacao e desenvolvimento do modo claro/escuro, ajustes de contraste, refinamento de acessibilidade e registro do Git.

---

- **GitHub-Page**: https://salamandr4.github.io/Project-ONG/
