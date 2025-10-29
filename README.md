## 🧾 Sobre o projeto

O app consome a API do [The Movie Database (TMDB)](https://www.themoviedb.org) para exibir uma lista de filmes mais bem avaliados, seus detalhes e permitir que o usuário marque seus filmes favoritos.

Todos os favoritos são **armazenados localmente** usando **AsyncStorage** e mantidos sincronizados com o estado global via **Redux Toolkit**.

---

## ⚙️ Tecnologias utilizadas

- **Expo SDK 53**
- **React Native 0.76**
- **TypeScript**
- **Redux Toolkit**
- **AsyncStorage**
- **Styled Components**
- **React Navigation**
- **Axios**
- **ESLint + Prettier**
- **Hooks personalizados**

---

## 📱 Funcionalidades

### 🏠 Home
- Exibe filmes mais bem avaliados (Top Rated)
- Scroll infinito com paginação
- Pull to refresh
- Acesso ao detalhe do filme

### 🎬 Detalhe do filme
- Exibe título, imagem, gêneros, data de lançamento e receita
- Permite favoritar/desfavoritar um filme

### ⭐ Favoritos
- Lista filmes salvos como favoritos
- Permite limpar todos
- Sincroniza entre Redux e AsyncStorage


---

## 🚀 Como executar o projeto

### 1️⃣ Pré-requisitos
- Node.js **v18 ou superior**
- npm ou yarn
- Expo CLI

### 2️⃣ Instalação

```bash
# Instalar dependências
npm install

# Iniciar o projeto
npx expo start


