# 🏥 Medical - Clínica Médica

Site institucional de uma clínica médica fictícia desenvolvido como projeto final do curso de Programador Front-End do Senai. A aplicação foi construída do zero, desde a prototipação no Figma até a entrega final, consolidando conceitos de componentização, gestão de estado, roteamento, responsividade com o React.

---

## 📷 Preview do projeto
<img src="src/assets/video/projeto-api-clima-video.gif" ></img>

## 🔗 Links do Projeto

- **Protótipo no Figma:** [Visualizar protótipo](https://www.figma.com/make/DOFjaBeFcp8lSCNKlNnimk/P%C3%A1gina-de-cl%C3%ADnica-m%C3%A9dica?p=f&t=OTNfMUFQoWtFacJG-0&fullscreen=1)
- **Deploy (GitHub Pages):** _em breve_
- **Repositório:** [github.com/hellenpaula/projeto-clinica-medica](https://github.com/hellenpaula/projeto-clinica-medica)

---

## 📋 Sobre o Projeto

A **Medical** é uma Single Page Application (SPA) que simula o site institucional de uma clínica médica. O objetivo é apresentar os serviços oferecidos, especialidades médicas, exames disponíveis e disponibilizar um canal de contato com formulário de agendamento.

Nesse projeto fiz a prototipação no Figma antes do desenvolvimento, e foi evoluindo durante a implementação como a área de contato, que no protótipo inicial estava como página separada e foi integrada como rota própria mantendo o layout consistente da aplicação.

---

## ✨ Funcionalidades

- Navegação por âncoras para as seções Home, Sobre, Especialidades e Exames

- Roteamento com React Router DOM para a página de Contato

- Carrossel de cards de Especialidades com scroll

- Em telas acima de 1024px, os cards de Especialidades se reorganizam em grid

- Carrossel de Exames disponível em todos os tamanhos de tela

- Hover nos cards com efeito de elevação

- Mapa de localização integrado via iframe do Google Maps

- Formulário de contato com:
  - Máscara de CPF aplicada em tempo real durante a digitação

  - Validação de formato de e-mail via Regex

  - Validação matemática completa do CPF 

  - Limpeza dos campos e mensagem de sucesso após envio

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia |  Uso |
|---|---|
| React | Biblioteca principal de UI |
| React DOM | Renderização no navegador |
| React Router DOM | Roteamento entre páginas |
| Vite  | Servidor de desenvolvimento |
| CSS Modules | Estilização por componente |



---

## 🚀 Como Rodar o Projeto


### Rodando localmente

```bash
# 1. Clone o repositório
git clone https://github.com/hellenpaula/projeto-clinica-medica.git

# 2. Entre na pasta do projeto
cd projeto-clinica-medica

# 3. Instale as dependências
npm install

# 4. Inicie o servidor de desenvolvimento
npm run dev
```

Acesse no navegador: **http://localhost:5173**

---

### Rodando com Docker

#### Pré-requisitos

- [Docker](https://www.docker.com/) instalado na máquina

#### Com Docker Compose (recomendado)

```bash
# 1. Clone o repositório
git clone https://github.com/hellenpaula/projeto-clinica-medica.git

# 2. Entre na pasta do projeto
cd projeto-clinica-medica

# 3. Suba a aplicação com um único comando
docker-compose up
```

Acesse no navegador: **http://localhost:5173**

Para encerrar:
```bash
docker-compose down
```

#### Apenas com Docker

```bash
# 1. Build da imagem
docker build -t clinica-medica .

# 2. Rode o container
docker run -p 5173:5173 clinica-medica
```

Acesse no navegador: **http://localhost:5173**

---

## 🌿 Controle de Versão

O projeto seguiu o Git Flow com branches separadas por feature, elas foram integradas a branche Main via Pull Request.

Exemplos de branches utilizadas:
- **feature/header**
- **feature/especialidades**
- **feature/exames**
- **feature/contato**


---

