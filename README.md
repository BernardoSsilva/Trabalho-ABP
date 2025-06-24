# Imobiliaria UniImmobile

## Integrantes do Grupo:

<ul>
    <li>
        <a href="https://www.github.com/BernardoSsilva"> Bernardo Santos Da Silva (Owner)</a>
    </li>
    <li>
        <a href="https://github.com/ElyeserGabrian">Elyeser Gabrian Nunes</a>
    </li>
    <li>
        <a href="https://github.com/GabrielSavioPereira">Gabriel Savio Pereira</a>
    </li>
    <li>
        <a href="https://github.com/Josue-RR">Josué Ramos da Rosa</a>
    </li>
    <li>
        <a href="https://github.com/VitorBotome">Vitor Botome</a>
    </li>
</ul>

# Especificações do projeto

## Tecnologias

<img src="https://skillicons.dev/icons?i=js,html,css,react,tailwind,github" />

## Descrição do projeto

O projeto UniImmobile é um sistema de unificação de funcionalidades para aprimorar o processo de anuncio e vendas de imóveis em Santa Catarina.

## Objetivo

O objetivo do projeto é ser uma alternativa a postagem de imóveis em redes sociais ou por via oral, buscando reunir informações relevantes para a venda, ou aluguel, de terrenos, casas e apartamentos.

## Publico alvo

O publico alvo pondera entre 2 grupos:

- Dono e funcionários de imobiliária;
- Pessoas interessadas em terrenos, casas e apartamentos;

## Estrutura do projeto

### Pagina de administração

A pagina de administração sera acessível apenas mediante a autenticação. Esta pagina será voltada para administração de usuários, imoveis e imagens.

Ao entrar nesta pagina um usuário administrador poderá acessar os módulos de registro de novos usuários e registro de imóveis.

No modulo de registro de usuário serão informados os dados de: telefone, email, nome, cpf e data de nascimento.

No modulo de registro de imóveis haverão dois sub-módulos, o módulo de informações de imóvel, onde serão registrados dados como: endereço, link do google maps, cep, proprietário, número de telefone do responsável, presença de escritura do imóvel, etc; e o módulo de registro de imagens, onde serão vinculadas imagens ao imóvel selecionado.

### Pagina de cliente

A pagina do cliente será acessível sem autenticação, onde o usuário poderá visualizar informações dos imóveis e poderá ser redirecionado para troca de mensagens com o responsável do imóvel.

## funcionalidades

- Gerenciamento de usuários;
- Gerenciamento de registros de imóveis;
- Visualização de Imóveis
- Visualização de Usuários

## Padronização do projeto

lingua de utilização: Inglês
Variaveis: **camelCase 🐫**  
Funções e objetos: **PascalCase**

### Organização de pastas

📁 **src/**  
├── 📁 **Components/**  
│ └─ <span style="opacity: 0.6;">Componentes globais reutilizáveis.</span>  
│
├── 📁 **Services/**  
│ └─ <span style="opacity: 0.6;">Funções de serviço utilizadas pela aplicação inteira (ex: requisições HTTP).</span>  
│
├── 📁 **Styles/**  
│ └── <span style="opacity: 0.6;">Estilos globais da aplicação (CSS).</span>  
│
├── 📁 **Models/**  
│ └── <span style="opacity: 0.6;">Classes e interfaces modelo da aplicação.</span>  
│
├── 📁 **Utilities/**  
│ └── <span style="opacity: 0.6;">Funções utilitárias reutilizáveis em toda a aplicação.</span>  
│
├── 📁 **Pages/**  
│ └─── <span style="opacity: 0.6;">Contém as páginas da aplicação.</span>  
│
│ └── 📁 _Nome_da_pagina_/  
│ ├─── 📄 _Nome_da_pagina_  
│ └─── 📁 **Components/**  
│ └──── 📄 _Nome_do_componente_  
│ └──── <span style="opacity: 0.6;">Componentes específicos da página.</span>

# Como realizar instalação do projeto?

1. Realizar a clonagem do repositório:  
   `$ git clone https://github.com/BernardoSsilva/Trabalho-ABP.git `

2. Acessar branch de desejada:  
   `$ git checkout <Nome_Da_Branch>`

3. acessar a pasta do projeto:  
   `$ cd Imobiliaria_UniImmobile`

4. Realizar instalação dos pacotes:  
   `$ npm install`

5. Iniciar o preto:  
   `$ npm run dev`
