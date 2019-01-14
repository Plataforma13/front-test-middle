# Teórico

1\) Qual a diferença do operador `==` para o operador `===` em JavaScript?

O operador `==` se refere a igualdade do valor, enquanto `===` significa igualdade de valor e de tipo.

1.1) Dê 2 exemplos de quando os operadores produziriam resultados diferentes

```js
"0" == 0
//true
"0" === 0
//false

null == undefined
//true
null === undefined
//false


```

---

2\) Recursos/Práticas:

2.1) Qual recurso do javascript é mais recomendado para tratar processamentos asíncronos? Justifique.

Promise.

O objeto Promise do javascript tem a função de processar requisições assíncronas. Uma "promessa" representa o fluxo assíncrono de um valor, sendo que este valor pode ser disponiblizado, ou não.
Caso a requisição tenha sucesso a "promessa" invocará o método `resolve` retornando o valor, caso tenha um erro a "promessa" invocará a função `reject` retornando o motivo do erro.
Este recurso é o mais recomendado atualmente por ser mais simples e manutenível que callbacks em cadeia.

2.2) Quais os recursos mais recomendados para incluir ícones em um site? Justifique.

Dependendo do seu objetivo, é recomendado usar bibliotecas de ícones como Font Awesome por exemplo ou utilizar imagens SVG.

As bibliotecas de ícones são um recurso muito simples de utilizar nas quais os ícones estão incluídos em fonte e cada ícone possui uma classe css.
Além das existentes como Font Awesome ou Material Design Icons, existem ferramentas que possibilitam a criação de sua própria biblioteca com seus ícones.
Uma outra outra abordagem é utilizar imagens SVG, que dão uma maior flexibilidade na exibição de cada ícone.


2.3) Qual recurso dos browsers é usado para carregar dados/conteúdos dinâmicos sem recarregar a página? Existem alternativas?

DOM (Document Object Model).

O DOM é a representação estruturada da página HTML em um objeto. Através do DOM é possível manipular todo o conteúdo do site que está sendo exibido no browser sem que seja necesário a atualização da página.
Existem alternativas para a manipulação do DOM, que na verdade são apenas abstrações como exemplo clássico o JQuery.


2.4) Qual recurso angular pode ser usado para aumentar a performance de campos que realizam algum processamento ao alterar o texto?

A diretiva NgModelOptions. Utilizando esta diretiva é possivel definir quando o processamento deve ser realizado (propriedade `updateOn`) ou definir um atraso para este processamento (propriedade `debounce`).
Desta forma evita-se que seja realizado o processamento a cada caractere digitado.

2.5) Por quê é importante diminuir a quantidade de watchers do angular em uma página e como fazer?

Cada watcher representa um processamento a mais que o AngularJS fará em seu "digest cycle. Diminuir a quantidade de watchers resulta em aumento da performance e diminuição de uso de memória de sua aplicação.
Para diminuir os watchers é possivel por exemplo utilizar one-time binding (`{{ ::valor }}`), no qual o valor será uma model será lido apenas uma vez. Ex.: `<h1>{{ ::titulo }}</h1>.
Outras formas incluem utilizar ng-if ao invés de ng-show e evitar o uso de ng-repeat quando desnecessário.

2.6) Por quê é importante evitar escopos isolados em diretivas do angular e como fazer?

[Resposta]

---

3\) CSS:

3.1) Por quê é importante não fazer seletores por tags html?

Definir que determinada tag sempre terá um estilo é arriscado.
Pensando na escalabilidade do site, hoje todas os elementos de uma lista `li` podem possuir o mesmo estilo, mas caso isso venha a se alterar no futuro será mais difícil e onerosa a alteração.

3.2) Para criar um site que desse a opção do usuário escolher um tema, qual tecnogia/recurso de css você utilizaria?

Variáveis css. Ao invés de usar valores absolutos nos valores das propriedades css que serão alteradas basta utilizar variáveis. Pré-processadores com SASS e LESS também possuem este recurso.

3.3) Quais práticas/recursos devem ser usados para criar sites responsivo?

As Media Queries CSS. Com este recurso você pode definir como o site será exibido/impresso para cada tipo e resolução de dispositivo.

3.4) Quais metodologias CSS você costuma seguir? Explique um pouco delas.

Atualmente utilizo OOCSS. Esta metodologia possui dois conceitos principais. O Primeiro é criar seletores separando structure de skin.
Structure se refere a aspectos tamanho, margens, posição. Já skin se refere ao aspecto visual com propiedades de cor, fontes, gradientes.
O outro conceito é a separação de conteúdo e contêiner. Com esta separação é possível criar seletores reutilizáveis.

---

4\) Análise de código

4.1) Quanto tempo vai demorar para o código a seguir imprimir "finished"? Justifique. (Levando em consideração que `somePromise()` vai retornar uma Promise resolvida)
```js
function doSomething() {
    return new Promise(resolve => {
        setTimeout(resolve, 1000)
    })
}

function doSomethingElse() {
    return new Promise(resolve => {
        setTimeout(resolve, 2000)
    })
}

somePromise()
    .then(() => {
        doSomething()
        doSomethingElse()
    })
    .then(() => {
        console.log('finished')
    })

```

Imprimirá instantaneamente.
As funções 'doSomething' e 'doSomethingElse' estão apenas sendo chamadas e estão sendo executadas em paralelo.
Uma forma correta para que elas fossem executadas em sequência seria:
```js
somePromise()
    .then(() => doSomething())
    .then(() => doSomethingElse())
    .then(() => {
        console.log('finished')
    })

```

4.2) O que o código a seguir imprime? (Levando em consideração que `somePromise()` vai retornar uma Promise resolvida)
```js
somePromise()
    .then(() => {
        throw new Error('uh oh!')
    }, err => {
        console.log(err.message)
    })
    .then(() => {
        console.log('ok now!')
    })
```

Retorna o erro 'uh oh!'.
A requisição retorna a promessa resolvida, portanto entra no método resolve, que está lançando uma exceção. E por ser uma exceção, o método then que impprimiria 'ok now!' não chega a ser executado.

4.3\) Quais as vantagens/desvantagens da segunda função em relação a primeira?
```js
function doSomething(options) {
    return fetch(options.url).then(r => r.json())
}

async function doSomethingAsync(options) {
    return fetch(options.url).then(r => r.json())
}
```

Nestas funções especificamente não há diferença, pois as duas estão retornando uma Promise. No entanto, a segunda função é uma AsyncFunction, o que possibilita o uso do
`await`, que em uma breve explicação, torna a função mais legível pois possibilita atribuições mais parecidas com chamadas síncronas Ex:

```js
async function doSomethingAsync(options) {
    const result = await fetch(options.url);
    const data = await result.json();
    return data;
}
```

---

5\) Quais as vantagens de usar ES modules em vez de usar commonjs?

Com ES modules trabalhamos com bindings das variáveis, enquanto com commonJS os módulos devem ser tratados como objetos.
Esse comportamento pode ser complicado, pois ao se alterar o valor de uma variável que já foi exportada, o valor não se altera onde esta variável foi importada.
Outra vantagem de ES modules é a sintaxe mais simples.

---

6\) Cite as principais diferenças entre um componente e uma diretiva no AngularJS.
Um componente é apropriado para construção de elementos que podem ser facilmente reutilizáveis na construção de uma aplicação com arquitetura baseada em componentes.
Além disso um componente não possui a função link, sempre teve possuir um template e possui um escopo isolado.
Já uma diretiva é apropriada quando é necessário manipular o DOM ou trabalhar com eventos por exemplo.