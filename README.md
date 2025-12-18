# 🍔 FatecBurger

Um site moderno e responsivo de hamburgueria desenvolvido como projeto acadêmico da FATEC, construído com React, TypeScript e Vite.

![React](https://img.shields.io/badge/React-19.2.0-61dafb.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178c6.svg)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.8-7952b3.svg)
![Vite](https://img.shields.io/badge/Vite-7.1.9-646cff.svg)

## 📋 Sobre o Projeto

FatecBurger é uma aplicação web Single Page Application (SPA) que simula o site de uma hamburgueria. O projeto apresenta um design moderno com modo claro/escuro, navegação intuitiva e componentes reutilizáveis, desenvolvido com TypeScript para maior segurança e produtividade no desenvolvimento.

### ✨ Funcionalidades

- 🏠 **Página Inicial**: Banner atrativo com apresentação da hamburgueria
- 🍔 **Menu**: Catálogo de produtos com imagens e descrições
- 📖 **Sobre**: Informações sobre a empresa e história
- 📞 **Contato**: Formulário de contato e localização no mapa
- 🌓 **Modo Escuro**: Alternância entre tema claro e escuro
- 📱 **Design Responsivo**: Interface adaptável para diversos dispositivos
- 🎨 **Carousel**: Galeria de imagens interativa

## 🛠️ Tecnologias Utilizadas

- **React** 19.2.0 - Biblioteca JavaScript para construção de interfaces
- **TypeScript** 5.9.3 - Superset JavaScript com tipagem estática
- **React Router DOM** 7.9.4 - Gerenciamento de rotas
- **Vite** 7.1.9 - Build tool e dev server ultrarrápido
- **Bootstrap** 5.3.8 - Framework CSS
- **React Bootstrap** 2.10.10 - Componentes Bootstrap para React
- **Docker** - Containerização da aplicação
- **Nginx** - Servidor web para produção

## 📁 Estrutura do Projeto

```
fatecBurger/
├── src/
│   ├── components/
│   │   ├── layout/          # Componentes de layout
│   │   │   ├── AboutMain.tsx
│   │   │   ├── Carousel.tsx
│   │   │   ├── ContactForm.tsx
│   │   │   ├── ContactInfo.tsx
│   │   │   ├── Header.tsx
│   │   │   └── HomeBanner.tsx
│   │   └── ui/              # Componentes de UI
│   │       ├── DarkModeSwitcher.tsx
│   │       ├── LocationMap.tsx
│   │       ├── Logo.tsx
│   │       ├── NavLink.tsx
│   │       ├── ProductItem.tsx
│   │       └── Toast.tsx
│   ├── context/             # Context API
│   │   └── ThemeContext.tsx
│   ├── pages/               # Páginas da aplicação
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Home.tsx
│   │   └── Menu.tsx
│   ├── styles/              # Estilos customizados
│   │   └── custom.css
│   ├── utils/               # Funções utilitárias
│   │   └── formHelpers.ts
│   ├── assets/              # Imagens e recursos
│   │   └── images/
│   ├── App.tsx              # Componente principal
│   └── main.tsx             # Ponto de entrada
├── Dockerfile               # Configuração Docker
├── nginx.conf               # Configuração Nginx
├── tsconfig.json            # Configuração TypeScript
├── vite.config.js           # Configuração Vite
├── package.json             # Dependências do projeto
└── index.html               # HTML principal
```

## 🚀 Como Executar o Projeto

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn
- Git

### Instalação

1. Clone o repositório:

```bash
git clone https://github.com/SouzaCleber98/fatecBurguer.git
```

2. Acesse o diretório do projeto:

```bash
cd fatecBurguer
```

3. Instale as dependências:

```bash
npm install
```

### Executando em Desenvolvimento

```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:5173`

### Build para Produção

```bash
npm run build
```

Os arquivos otimizados serão gerados na pasta `dist/`

## 🐳 Docker

### Construir a imagem Docker

```bash
docker build -t fatecburger .
```

### Executar o container

```bash
docker run -p 8080:80 fatecburger
```

A aplicação estará disponível em `http://localhost:8080`

## 🎨 Componentes Principais

### ThemeContext

Gerencia o estado global do tema (claro/escuro) da aplicação usando Context API.

### Header

Barra de navegação responsiva com links para todas as páginas e alternador de tema.

### DarkModeSwitcher

Componente para alternar entre modo claro e escuro.

### Carousel

Galeria de imagens interativa para exibir fotos da hamburgueria.

### ContactForm

Formulário de contato com validação de campos.

### LocationMap

Mapa de localização integrado para mostrar o endereço da hamburgueria.

## 📱 Páginas

- **Home** (`/`) - Página inicial com banner e destaques
- **Menu** (`/Menu`) - Cardápio com produtos disponíveis
- **About** (`/About`) - Informações sobre a hamburgueria
- **Contact** (`/Contact`) - Formulário de contato e localização

## 👨‍💻 Autor

**Cleber Souza**

- GitHub: [@SouzaCleber98](https://github.com/SouzaCleber98)

## 🎓 Projeto Acadêmico

Desenvolvido como parte do curso de Programação Web da FATEC (Faculdade de Tecnologia do Estado de São Paulo).

### 📚 Conceitos Aplicados

- Single Page Application (SPA)
- Component-Based Architecture
- React Hooks (useState, useContext)
- Context API para gerenciamento de estado
- TypeScript para type safety

---

⭐ Se este projeto foi útil para você, considere dar uma estrela!
