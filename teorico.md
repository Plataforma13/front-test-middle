# Teórico

1\) Qual a diferença do operador `==` para o operador `===` em JavaScript?

[Resposta]
O operador `==` faz uma comparação abstrata: compara os valores e não os tipos dos operandos.
O operador `===` faz uma comparação estrita: compara ao mesmo tempo os tipos e valoes dos operandos.
Uma comparação estrita (===) só é verdade se os operandos são do mesmo tipo e possuem o mesmo valor.

1.1) Dê 2 exemplos de quando os operadores produziriam resultados diferentes

```js
// Resposta

1 == true // true
1 === true // false

7 == '7' // true
7 === '7' // false
```

---

2\) Recursos/Práticas:

2.1) Qual recurso do javascript é mais recomendado para tratar processamentos asíncronos? Justifique.

[Resposta]
Promises
[Justificativa]
Promise guarda a "promessa" que em algúm momento a função que gerou ele vai retornar uma resposta.
A função faz apenas o que ela deve fazer e não precisa chamar callback ou saber o que a função que chamou ele está esperando.
Deixa o código menos aninhado e mais fácil de entender do que usando callback

2.2) Quais os recursos mais recomendados para incluir ícones em um site? Justifique.

[Resposta]

svg

[Justificativa]

svg são gráfico vetoriais escláveis, isto é mantêm a "mesma qualidade" independende da resolução. Tem fundo transparente. O tamanho do arquivo é bem menor e ele "aceita" animaçoes em css. Pode ser incluído como fonte, <i>, <svg> e outras. Para faveicon do site tem que ser .ico.

2.3) Qual recurso dos browsers é usado para carregar dados/conteúdos dinâmicos sem recarregar a página? Existem alternativas?

[Resposta]

2.4) Qual recurso angular pode ser usado para aumentar a performance de campos que realizam algum processamento ao alterar o texto?

[Resposta]

2.5) Por quê é importante diminuir a quantidade de watchers do angular em uma página e como fazer?

[Resposta]

2.6) Por quê é importante evitar escopos isolados em diretivas do angular e como fazer?

[Resposta]

---

3\) CSS:

3.1) Por quê é importante não fazer seletores por tags html?

[Resposta]

Não deixa o estilo ser reaproveitado. "Polui" muito o html. Pode atrapalhar a renderização da página.

3.2) Para criar um site que desse a opção do usuário escolher um tema, qual tecnogia/recurso de css você utilizaria?

[Resposta]

SASS. Criaria variáveis que  armazenando o estilo de cada tema. Trocaria classe do html de acordo com a escolha do usuáirio.

3.3) Quais práticas/recursos devem ser usados para criar sites responsivo?

[Resposta]
Prática mobile first, pensar do menor dispositivo para o maior dispositivo.
BootStrap. Já contem sistema de grids, media queries, classes para desenvolvimento responsivo. Aumenta muito a produtividade além sem ser o mais usado na web.

3.4) Quais metodologias CSS você costuma seguir? Explique um pouco delas.

[Resposta]
Atomic Design
BEM

[Explicacão]
Atomic desgin faz pensar na UI de maneira hierarquia, como no bootstrap.
O BEM ajuda muito na hora de criar classes css semânticas e informativas.
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

[Resposta]
2 segundos.
[Justificativa]
doSomething() e doSomethingElse() são executados paralelamente. 

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

[Resposta]

[Justificativa]

4.3\) Quais as vantagens/desvantagens da segunda função em relação a primeira?
```js
function doSomething(options) {
    return fetch(options.url).then(r => r.json())
}

async function doSomethingAsync(options) {
    return fetch(options.url).then(r => r.json())
}
```

[Resposta]

---

5\) Quais as vantagens de usar ES modules em vez de usar commonjs?

[Resposta]

---

6\) Cite as principais diferenças entre um componente e uma diretiva no AngularJS.

[Resposta]
