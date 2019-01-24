# Teórico

1\) Qual a diferença do operador `==` para o operador `===` em JavaScript?
O operador '===' compara tipo e valor da variavel, enquanto o '==' só compara valores

[Resposta]

1.1) Dê 2 exemplos de quando os operadores produziriam resultados diferentes


```js
// Resposta
```
if(true == 'true') // retorna true
if(true === 'true') // retorna false

if(1 == '1') // retorna true
if(1 === '1') // retorna false

---

2\) Recursos/Práticas:

2.1) Qual recurso do javascript é mais recomendado para tratar processamentos asíncronos? Justifique.

[Resposta]

Funções async, pois trabalham Promises de uma forma mais simples e sem utilização de callbacks

[Justificativa]

2.2) Quais os recursos mais recomendados para incluir ícones em um site? Justifique.

[Resposta]

Utilização de bibliotecas como o Font-Awesome, pois a utilização é simples e te oferece uma grande variedade de icones

[Justificativa]

2.3) Qual recurso dos browsers é usado para carregar dados/conteúdos dinâmicos sem recarregar a página? Existem alternativas?

[Resposta]

DOM. Através do DOM é possível manipular a página sem recarregar.

2.4) Qual recurso angular pode ser usado para aumentar a performance de campos que realizam algum processamento ao alterar o texto?

[Resposta]

2.5) Por quê é importante diminuir a quantidade de watchers do angular em uma página e como fazer?

[Resposta]

Porque cada watcher representa um aumento no consumo de memória e processamento de sua página.

2.6) Por quê é importante evitar escopos isolados em diretivas do angular e como fazer?

[Resposta]

---

3\) CSS:

3.1) Por quê é importante não fazer seletores por tags html?

[Resposta]

Para facilitar a manutenção do seu sistema.

3.2) Para criar um site que desse a opção do usuário escolher um tema, qual tecnogia/recurso de css você utilizaria?

[Resposta]

3.3) Quais práticas/recursos devem ser usados para criar sites responsivo?

[Resposta]

Costumo usar uma função para identificar qual navegador e qual a resolução do dispositivo usado para acessar o sistema e recursos do Bootstrap para ajustar a tela.

3.4) Quais metodologias CSS você costuma seguir? Explique um pouco delas.

[Resposta]

[Explicacão]

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

Instantânea

[Justificativa]

O time out está nas funções doSomething e doSomethingElse

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
uh oh!
[Justificativa]

Por chamar uma exceção o método do segundo .then() não é executado

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
A segunda função leva vantagem porque usa o async e sua atribuição não precisa de um callback, mas o resultado das duas é o mesmo
---

5\) Quais as vantagens de usar ES modules em vez de usar commonjs?

[Resposta]

---

6\) Cite as principais diferenças entre um componente e uma diretiva no AngularJS.

[Resposta]
Um componente é usado para criar recursos completos que podem ser reutilizados em seu sistema e ao ser criado gera seus arquivos de forma separada, dando independência em relação a outras páginas.
Uma diretiva serve para manipular o DOM como ng-For, ng-If 
