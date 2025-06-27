# 🚀 Meu Portfólio - React

Um portfólio moderno e responsivo desenvolvido com React, Vite e tecnologias web atuais.

## 📸 Preview

<!-- Adicione aqui uma screenshot do seu portfólio quando estiver pronto -->

## 🛠️ Tecnologias Utilizadas

- **React** 18.2.0 - Biblioteca JavaScript para construção de interfaces
- **Vite** 5.0.0 - Build tool moderna e rápida
- **React Router DOM** 6.14.0 - Roteamento para aplicações React
- **EmailJS** 4.4.1 - Envio de emails diretamente do frontend
- **Date-fns** 4.1.0 - Manipulação de datas
- **CSS3** - Estilização moderna e responsiva

## 🎯 Funcionalidades

- ✅ Design responsivo e moderno
- ✅ Navegação fluida entre seções
- ✅ Sistema de tema claro/escuro
- ✅ Seção sobre mim com tempo de experiência dinâmico
- ✅ Portfólio de projetos
- ✅ Tecnologias que domino
- ✅ Formulário de contato funcional
- ✅ Footer informativo

## 📁 Estrutura do Projeto

```text
src/
├── components/           # Componentes reutilizáveis
│   ├── Header.jsx       # Cabeçalho com navegação
│   ├── Footer.jsx       # Rodapé
│   ├── ThemeToggle.jsx  # Alternador de tema
│   └── sections/        # Seções do portfólio
│       ├── Contact.jsx
│       ├── Projects.jsx
│       ├── Technologies.jsx
│       └── sections.css
├── pages/               # Páginas principais
│   ├── Home.jsx
│   ├── About.jsx
│   └── about.css
├── hooks/               # Hooks customizados
│   ├── useCountTime.js
│   └── useExperienceTime.js
├── styles/              # Estilos globais
│   ├── main.css
│   ├── components.css
│   └── variables.css
├── assets/              # Recursos estáticos
│   └── images/
├── App.jsx              # Componente principal
└── main.jsx             # Ponto de entrada
```

## 🚀 Como Executar

### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn

### Instalação

1. **Clone o repositório**

   ```bash
   git clone https://github.com/seu-usuario/MeuPortfolioReact.git
   cd MeuPortfolioReact
   ```

2. **Instale as dependências**

   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Execute o projeto em modo de desenvolvimento**

   ```bash
   npm run dev
   # ou
   yarn dev
   ```

4. **Abra no navegador**

   O projeto estará disponível em `http://localhost:5173`

## 📦 Build para Produção

Para gerar os arquivos otimizados para produção:

```bash
npm run build
# ou
yarn build
```

Para visualizar o build localmente:

```bash
npm run preview
# ou
yarn preview
```

## 🎨 Customização

### Temas

O projeto inclui um sistema de tema claro/escuro. As variáveis CSS estão centralizadas em `src/styles/variables.css`.

### Conteúdo

- **Informações pessoais**: Edite os componentes em `src/pages/`
- **Projetos**: Adicione seus projetos em `src/components/sections/Projects.jsx`
- **Tecnologias**: Atualize suas skills em `src/components/sections/Technologies.jsx`

### Estilos

- **Estilos globais**: `src/styles/main.css`
- **Componentes**: `src/styles/components.css`
- **Variáveis**: `src/styles/variables.css`

## 📧 Configuração do EmailJS

Para o formulário de contato funcionar, configure o EmailJS:

1. Crie uma conta em [EmailJS](https://www.emailjs.com/)
2. Configure um serviço de email
3. Crie um template de email
4. Adicione suas credenciais no componente `Contact.jsx`

## 🌐 Deploy

Este projeto pode ser facilmente deployado em:

- **Vercel** (recomendado para projetos React)
- **Netlify**
- **GitHub Pages**
- **Firebase Hosting**

### Deploy na Vercel

1. Instale a CLI da Vercel: `npm i -g vercel`
2. Execute: `vercel`
3. Siga as instruções

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fazer fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commitar suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abrir um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

### Seu Nome

- LinkedIn: [seu-perfil](https://linkedin.com/in/seu-perfil)
- GitHub: [seu-usuario](https://github.com/seu-usuario)
- Email: <seu-email@gmail.com>

---

⭐ Se este projeto te ajudou, considere dar uma estrela!

## 🔄 Atualizações

- **v1.0.0** - Versão inicial do portfólio
  - Interface moderna e responsiva
  - Sistema de temas
  - Formulário de contato
  - Seções completas do portfólio
