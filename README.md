## 🚀 Execução do Projeto

### ✅ **Pré-requisitos**
Antes de iniciar, verifique se possui as versões corretas instaladas:
```bash
node -v    # v22.21.0
yarn -v    # deve estar instalado (npm pode causar conflitos)
```

### ⚙️ **Instalar dependências**
Use **Yarn** (não npm) para garantir compatibilidade com o Expo 52 e React Native 0.76:
```bash
yarn install
```

> 💡 Caso veja alertas sobre peer dependencies, eles podem ser ignorados — o Expo gerencia as versões compatíveis automaticamente.

---

### ▶️ **Rodar o projeto**
Para iniciar o app em modo de desenvolvimento, execute:

```bash
yarn start --tunnel
```

---

### 📱 **Executar no Expo Go (modo Tunnel)**
(o modo tunnel garante a execução)
1. Abra o **app Expo Go** no seu celular (Android/iOS).  
2. Escaneie o QR Code exibido no terminal.  
3. Aguarde o carregamento automático do app.

> 🔒 Caso o QR não funcione, verifique se o firewall do Windows permite conexões locais ou utilize o modo `--lan`.

---

### 🧹 **Limpar cache (caso ocorra erro de Metro bundler)**
Se notar erros estranhos de import ou cache, execute:

```bash
yarn start -c
```
ou
```bash
expo start -c
```

---

## 🧩 Tecnologias Utilizadas
- **Expo 52**
- **React Native 0.76**
- **React 18.3.1**
- **Redux Toolkit**
- **Styled Components**
- **React Navigation**
- **Axios**
- **TMDB API**

---

**Funções principais:**
- `favorites`: lista de filmes favoritos
- `addFavorite(movie)`: adiciona um novo favorito
- `removeFavorite(id)`: remove um filme favorito
- `clearFavorites()`: limpa todos os favoritos
