# Teórico

1\) Qual a diferença do operador `==` para o operador `===` em JavaScript?

[Resposta]
O operador '==' compara os valores, já o '===' compara além dos valores, o tipo
da variável.

1.1) Dê 2 exemplos de quando os operadores produziriam resultados diferentes

```js
12 == '12'
// true

12 ==='12'
// false
```
---

2\) Recursos/Práticas:

2.1) Qual recurso do javascript é mais recomendado para tratar processamentos assíncronos? Justifique.

[Resposta]
Promises.

[Justificativa]
As Promises permitem que utilizemos os callbacks de acordo com a resposta da
requisição assíncrona.

2.2) Quais os recursos mais recomendados para incluir ícones em um site? Justifique.

[Resposta]

[Justificativa]

2.3) Qual recurso dos browsers é usado para carregar dados/conteúdos dinâmicos
sem recarregar a página? Existem alternativas?

[Resposta]
AJAX.

2.4) Qual recurso angular pode ser usado para aumentar a performance de campos
que realizam algum processamento ao alterar o texto?

[Resposta]
ng-form.

2.5) Por quê é importante diminuir a quantidade de watchers do angular em uma
página e como fazer?

[Resposta]
Porque o uso excessivo de watchers, prejudica o desempenho da página.
Uma das possíveis formas de diminuir este impacto, é reduzir a quantidade de
expressions que chamam functions,pois sempre que houver uma interação com a
página, elas serão chamadas inúmeras vezes.

2.6) Por quê é importante evitar escopos isolados em diretivas do angular e como fazer?

[Resposta]

---

3\) CSS:

3.1) Por quê é importante não fazer seletores por tags html?

[Resposta]
Porque em caso de mudar a estrutura do HTML, pode ocasionar na quebra do estilo,
além disso, um css mais ordenado por classes, certamente é mais reutilizável.

3.2) Para criar um site que desse a opção do usuário escolher um tema, qual tecnologia/recurso de css você utilizaria?

[Resposta]

3.3) Quais práticas/recursos devem ser usados para criar sites responsivo?

[Resposta]

3.4) Quais metodologias CSS você costuma seguir? Explique um pouco delas.

[Resposta]
Gosto do OOCSS

[Explicação]
Gosto da reutilização de código, clareza nos nomes e facilidade de compreensão,
quase como se o código se auto documentasse.

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
Três segundos.

[Justificativa]
Me baseio na ordem de execução, a função somPromise() executará todas as
promises encadeadas, porém, dentro da primeira ela chamara duas funções callback
primeiro doSomething() e em seguida, um segundo depois, doSomethingElse(), então
dois segundos depois, chamara a próxima promise imprimindo 'finished' no
console.


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
o código imprime a mensagem de erro.

[Justificativa]
Após uma declaração throw, as instruções seguintes não são executadas, e o
controle é passado para o primeiro bloco .catch subsequente.

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
Os módulos permitem o encapsulamento das funcionalidades de diversos tipos, e o
uso dessas funcionalidades como bibliotecas.
Permitindo código mais limpo e organizado, e maior reaproveitamento de código.
---

6\) Cite as principais diferenças entre um componente e uma diretiva no AngularJS.
[Resposta]
Os componentes devem somente receber e emitir valores sem modifica-los, já as
diretivas, modificam o valor.
