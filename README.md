<div id="top" align="center">
  <div>
    <img src="github/images/logo.png" alt="Logo" width="209" height="61">
  </div>
  <h4 align="center">Ignite Feed - Rede social dos igniters.</h4>
</div>

## Resumo

<ol>
  <li><a href="#visão-geral-do-projeto">Visão geral do projeto</a></li>
  <li><a href="#tecnologias-utilizadas">Tecnologias utilizadas</a></li>
  <li><a href="#instalação-e-utilização">Instalação e utilização</a></li>
  <li><a href="#vite-js">ViteJS</a></li>
  
</ol>

## Visão geral do projeto

<div align="center">
  <img src="github/images/dashboard.png" alt="project preview" width="1180" height="520">  
</div>

## Tecnologias utilizadas

- [ReactJS](https://reactjs.org/)
- [ViteJS](https://vitejs.dev/)

## Instalação e utilização

### Pré-requisitos

Instalações necessárias

1. NodeJS
2. Yarn

### Instalação

1. Baixe as depedências do projeto com o comando `$ yarn`.
2. Rode o projeto com o comando `$ yarn dev`. -> localhost:3001

## Vite JS

1. Compilers, ou compiladores de código em português, são ferramentas responsáveis pela conversão de código em versões
mais novas para versões mais antigas. Isso é necessário pois nem todas as funcionalidades das linguagens são suportados 
pelos browsers, dessa forma o Babel (exemplo de compilador), faz a tradução.

2. Bundlers, como o Webpack, são responsáveis pela unção de todos os arquivos da aplicação em apenas um arquivo. Em uma 
aplicação atual é muito comum existirem vários arquivos com várias importações de arquivos em formatos diferentes e que
muitas vezes não são legíveis para os browsers. O Webpack une e formata todos esses arquivos tornando-os legíveis.

 - Vite surgiu para facilitar o densenvolvimento de aplicações JS, trazendo um bocado de configurações prontas
contanto com seu próprio blunder, mais veloz e prático. O Vite suporta Typescript e ES Modules por padrão. 

## Margin Top Negativo

```css
  margin-top: calc(0px - 1.5rem - 6px); /*margin top negativo centralizado*/
```

## Corrigindo Box Sizing

```css
.avatar{
  width: calc(3rem + 12px); /* cáculo para corrgir box-sizing */
  height: calc(3rem + 12px);
  border-radius: 8px;
  border: 4px solid var(--gray-800);
  outline: 2px solid var(--green-500);
}
```

## Tag Time

Utilizando tag time da maneira correta

```html
<time title="11 de maio às 08:13h" dateTime='2022-05-08 08:13:30'>Publicado há 1h</time>
```

## Mudando Outline Color

```css
:focus {
  /*global.css*/
  outline: transparent;
  box-shadow: 0 0 0 2px var(--green-500);
}
```

## Ocultar elemento mantendo acessibilidade

```css
/*ocultado botão, mantendo acessibildiade*/
.commentForm footer { 
  visibility: hidden;
  max-height: 0;
}

/*quando algo dentro do commentForm estiver focado, mostrar botão*/
.commentForm:focus-within footer { 
  visibility: visible;
  max-height: none;
}
```

## Segredo no button

Por padrão os botões seguem a altura do font-size ou line-height, dessa forma, muitas vezes o espaço interno em um dos
lados do botão pode ficar maior. Para corrigir esse problema, basta aplicar a solução abaixo:

```css
button {
  line-height: 0; /*ou font-size:0*/
}
```

## Aplicando responsividade

```css
button {
  @media (max-width: 768px) {
  html {
    font-size: 87.5%;
  }
  
  .wrapper {
    grid-template-columns: 1fr; 
  }
}

/*
  16 -> 100
  14 -> fontSize

  fontSize = 14 * 100 / 16
  fontSize = 87.5%
*/
}
```

## Formatando data e hora com date-fns

```js
  import { format } from 'date-fns'
  import ptBR from 'date-fns/locale/pt-BR'
 
  //03 de maio às 21:03h
  const longPublishedAt = format(publishedAt, "dd 'de' LLLL 'às' HH:mm'h'", { 
    locale: ptBR
  })

  //há cerca de 8 horas / dias / minutos
  const publishedAtDistaceFromNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })
```

## Tipando o event.onChange e event.onInvalid

```js
<textarea 
  placeholder='Deixar comentário'
  value={textAreaValue}
  onChange={handleTextAreaValueChange}
  required
  onInvalid={handleInvalidTextArea}
/>


function handleTextAreaValueChange(event: ChangeEvent<HTMLTextAreaElement>) {
  event.target.setCustomValidity('') //limpar a validação quando algo for digitado
  setTextAreaValue(event.target.value)
}

function handleInvalidTextArea(event: InvalidEvent<HTMLTextAreaElement>) {
  event.target.setCustomValidity('Este campo precisa ser preenchido!')
}
```


## Estilizando button:disabled

```css
/*Aplicar hover somente quando button não estiver disabled*/
.commentaryForm button[type=submit]:not(:disabled):hover {
  background-color: var(--green-300);
}

.commentaryForm button[type=submit]:disabled {
  background-color: var(--gray-600);
  cursor: not-allowed;
  opacity: 0.7;
}
```


<br />

<h4 align="center"><a href="#top">Voltar ao Início</a></h4>