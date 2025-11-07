# 🌴 PG360 - Guia Turístico de Praia Grande (SP)

O **PG360** é uma plataforma digital dedicada à divulgação de **pontos turísticos**, **eventos culturais** e **locais de lazer** na vibrante cidade de Praia Grande, São Paulo.

O **objetivo** principal do projeto é **promover o turismo local**, servindo como um elo entre moradores e visitantes e as principais atrações e novidades da cidade.

---

## 🚀 Visão Geral e Funcionalidades

O PG360 foi projetado para oferecer uma experiência simples, intuitiva e interativa a quem deseja explorar o melhor de Praia Grande.

O visitante pode acessar rapidamente informações detalhadas sobre:

* **🎭 Eventos Culturais:** Agenda e detalhes sobre festivais, shows e atrações locais.
* **🏖️ Pontos Turísticos:** Guia completo de praias, monumentos e locais de interesse.
* **🍽️ Lazer e Gastronomia:** Sugestões de restaurantes, bares e outras opções de entretenimento.
* **🗺️ Mapas Interativos:** Visualização da localização dos pontos de interesse e rotas de acesso.
* **🧭 Roteiros Personalizados:** Sugestões de passeios e trilhas para diferentes perfis de viajantes.

---

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído utilizando uma arquitetura moderna e robusta, separando claramente o Frontend do Backend.

### **Frontend** (Interface do Usuário)

| Tecnologia | Função |
| :--- | :--- |
| **React** | Criação de interfaces modernas, dinâmicas e baseadas em componentes. |
| **TailwindCSS** | Framework de CSS utilitário para estilização rápida, responsiva e eficiente. |
| **React Router** | Gerenciamento da navegação e roteamento entre as páginas da aplicação. |

### **Backend** (API e Dados)

| Tecnologia | Função |
| :--- | :--- |
| **Java com Spring Boot** | Desenvolvimento da API RESTful robusta e escalável para gerenciamento de dados. |
| **PostgreSQL** | Banco de dados relacional de código aberto para armazenamento persistente de dados. |
| **Spring Data JPA** | Facilita o acesso e a persistência de dados no banco, utilizando o paradigma ORM. |

---

## ⚙️ Estrutura do Projeto e Instalação

Siga os passos abaixo para configurar e rodar o projeto localmente (para a parte do **Frontend**):

### 1. Pré-requisitos
Certifique-se de ter o **Node.js** e o **npm** (ou Yarn/pnpm) instalados em sua máquina.

### 2. Passos para Rodar

| Passo | Comando | Descrição |
| :--- | :--- | :--- |
| **1.** Instalar as dependências do projeto: | `npm install` | Baixa todos os pacotes necessários definidos no `package.json`. |
| **2.** Iniciar o servidor de desenvolvimento: | `npm run dev` | Compila o código e inicia o servidor com *Hot Reloading*. |

> 🌐 O projeto será carregado e estará acessível em `http://localhost:[PORTA]`. O servidor atualizará automaticamente o navegador a cada alteração no código-fonte.

### 3. Gerar a Versão de Produção (Build)

Para criar os arquivos estáticos prontos para *deploy*:

```bash
npm run build
