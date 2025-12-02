# 🗺️ PG360: Mapeamento Turístico de Praia Grande

### PG360: Uma plataforma web Full-Stack moderna e eficiente, desenvolvida para mapear, catalogar e apresentar os pontos turísticos da cidade de Praia Grande, proporcionando uma experiência interativa e informativa.

Este projeto foca na performance e na arquitetura modular, separando a lógica de negócios (API em Spring Boot) da interface do usuário (React).

---

## ✨ Funcionalidades em Destaque

* **Mapeamento Interativo:** Utilização da **Google Maps API** para plotar e exibir pontos turísticos em um mapa dinâmico.
* **API RESTful Robusta:** Backend em **Spring Boot** para gestão de dados de pontos turísticos, categorias e usuários.
* **CRUD de Conteúdo:** Ferramentas para administradores catalogarem, editarem e removerem locais e informações detalhadas.
* **Filtros de Pesquisa Avançados:** Funcionalidades de busca por categoria e localização para otimizar a experiência do usuário.
* **Autenticação JWT:** Implementação de um sistema seguro de login e autorização.

## 💻 Tecnologias Utilizadas

| Categoria | Tecnologia | Badge |
| :--- | :--- | :--- |
| **Backend API** | ☕ **Spring Boot** | <img src="https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=spring-boot&logoColor=white" alt="Badge Spring Boot"> |
| **Linguagem Backend** | 🐘 **Java** | <img src="https://img.shields.io/badge/Java-007396?style=for-the-badge&logo=java&logoColor=white" alt="Badge Java"> |
| **Banco de Dados** | 💾 **PostgreSQL** | <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" alt="Badge PostgreSQL"> |
| **Frontend** | ⚛️ **React** | <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="Badge React"> |
| **Build Tool Frontend** | ⚡ **Vite** | <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Badge Vite"> |
| **Estilização** | 🌬️ **Tailwind CSS** | <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Badge Tailwind CSS"> |
| **Mapeamento** | 🗺️ **Google Maps API** | <img src="https://img.shields.io/badge/Google_Maps-4285F4?style=for-the-badge&logo=google-maps&logoColor=white" alt="Badge Google Maps API"> |
| **Versionamento** | 🌳 **Git** | <img src="https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white" alt="Badge Git"> |
| **Repositório** | 🐙 **GitHub** | <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="Badge GitHub"> |

---

## 📂 Estrutura do Repositório

O projeto é dividido em dois módulos principais (`pg360-backend` e `pg360-site-frontend`) para garantir a separação de responsabilidades.

### 1. `pg360-backend` (API em Spring Boot)

A API segue a arquitetura MVC (Model-View-Controller) com foco em RESTful services:

````
pg360-backend/
├── .idea/                 # (Arquivos de configuração da IDE - IntelliJ)
├── pg360-site/
├── .mvn/wrapper/
├── src/
│   ├── main/
│   │   ├── java/br/com/pg360/api/
│   │   │   ├── config/        # Configurações do Spring (Segurança, CORS, etc.)
│   │   │   ├── controller/    # Camada de Endpoints RESTful
│   │   │   ├── model/         # Classes de Entidade (JPA)
│   │   │   └── repository/    # Camada de Acesso a Dados
│   │   └── resources/       # Arquivos de propriedades e configurações
│   └── test/              # Testes de unidade e integração
├── .gitattributes
├── .gitignore
├── mvnd                      # Executável Maven Wrapper
├── pom.xml                   # Gerenciamento de dependências Maven
└── ...
````

### 2. `pg360-site-frontend` (Aplicação React/Vite)

O Frontend é baseado em componentes React e utiliza o roteamento para gerenciar as visualizações:

````
pg360-site-frontend/
├── public/                    # Arquivos estáticos públicos
├── src/
│   ├── assets/                # Imagens, fontes e outros recursos
│   ├── components/            # Componentes React Reutilizáveis
│   │   ├── Administracao/
│   │   ├── Agenda/
│   │   ├── Atracoes&Passeios/
│   │   ├── Avaliacoes/
│   │   ├── CarrosselHome/
│   │   ├── Eventos/
│   │   ├── Footer/
│   │   ├── NavBar/
│   │   └── Home.jsx
│   ├── router/                # Arquivos de Roteamento da Aplicação
│   │   └── routes.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx               # Entry Point (main do Vite)
│   └── tailwind.css           # Arquivo de configuração do Tailwind CSS
├── package.json
└── ...
````

---

## 🚀 Como Rodar o Projeto Localmente

### Pré-requisitos

* **JDK** (Java Development Kit) [Versão]
* **Node.js** e **npm** (ou yarn)
* **PostgreSQL** (Servidor de Banco de Dados)

### 1. Clonar o Repositório

  ```bash
    git clone https://github.com/yonevxs/pg360-site.git
  ```

### 2. Configuração do Backend (API)

1.  **Navegue para a pasta `pg360-backend`:**
    ```bash
    cd pg360-site/pg360-backend
    ```
2.  **Configure o BD:** Crie um banco de dados e ajuste o arquivo de configuração (`application.properties` ou `.yml`) com as credenciais do PostgreSQL.
   
3.  **Execute a API:**
    ```bash
    # Exemplo com Maven:
    ./mvnw spring-boot:run 
    ```

### 3. Configuração do Frontend (React/Vite)

1.  **Navegue para a pasta `pg360-site-frontend`:**
    ```bash
    cd ../pg360-site-frontend 
    ```
2.  **Instale as Dependências:**
    ```bash
    npm install
    # OU
    yarn install
    ```
3.  **Configure as Variáveis de Ambiente:** Crie o arquivo `.env` e adicione sua chave da Google Maps API e a URL base da sua API Spring Boot.

4.  **Execute a Aplicação (usando Vite):**
    ```bash
    npm run dev
    ```
---

