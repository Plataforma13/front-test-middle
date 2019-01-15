# Teórico

1\) Qual a diferença do operador `==` para o operador `===` em JavaScript?

O operador == verifica se existe igualdade de valores, já o operador === verifica se existe igualdade de valores e também de tipo.

1.1) Dê 2 exemplos de quando os operadores produziriam resultados diferentes

```js
2 === '2' o resultado é falso pois o primeiro é um number e o segundo é uma string
'voe' === 'agora' o resultado é falso porque apesar de serem duas strings, o valor é diferente
```

---

2\) Recursos/Práticas:

2.1) Qual recurso do javascript é mais recomendado para tratar processamentos asíncronos? Justifique.

Observable

Com ela o programador consegue tratar múltiplos eventos asíncronos e ainda usar operadores como map e forEach para iterar pelos dados.

2.2) Quais os recursos mais recomendados para incluir ícones em um site? Justifique.

Acredito que usar uma biblioteca como Font-awesome, porque ela te possibilita acesso há vários ícones usando tags

2.3) Qual recurso dos browsers é usado para carregar dados/conteúdos dinâmicos sem recarregar a página? Existem alternativas?

Asynchronous JavaScript And XML, também conhecido como AJAX. Outras alternativas que conheço para essa interação é o Two way data binding, usado em bibliotecas como Angular, React e Vue.

2.4) Qual recurso angular pode ser usado para aumentar a performance de campos que realizam algum processamento ao alterar o texto?

Watchers

2.5) Por quê é importante diminuir a quantidade de watchers do angular em uma página e como fazer?

Eles podem fazer com que a página fique mais lenta devido ao loop que é realizado para 'observar' o comportamento esperado.

2.6) Por quê é importante evitar escopos isolados em diretivas do angular e como fazer?

Para poder reutilizar variáveis e componentes que não estariam em algum escopo isolado.

---

3\) CSS:

3.1) Por quê é importante não fazer seletores por tags html?

Porque quando se usa uma tag HTML o CSS modifica todos os elementos que usam essa tag, o que geralmente não é o desejado. o ideal é colocar classes para definir quais elementos o programador gostaria de modificar.

3.2) Para criar um site que desse a opção do usuário escolher um tema, qual tecnogia/recurso de css você utilizaria?

Sass, ele é um pré-processador que permite usar variáveis em CSS, o que facilita muito na hora de trocar as cores de determinadas classes ao alterar o tema.

3.3) Quais práticas/recursos devem ser usados para criar sites responsivo?

Geralmente se usa media-queries, onde o programador pode definir elementos dependendo do tamanho da tela exibida. Usa-se também medidas como porcentagem para os elementos se adaptarem baseando-se no tamanho da tela.

3.4) Quais metodologias CSS você costuma seguir? Explique um pouco delas.

Gosto de utilizar uma linguagem humana nas classes e variáveis, para que seja fácil saber do que se trata asism que algum outro programador bater o olho. Faço também sub-divisões de elementos que tenham cores ou formas diferentes. Exemplo: 
<button class='primary_button background__red'>Botão vermelho</button>
<button class='primary_button background__blue'>Botão azul</button>

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

Assim que for resolvido o a promise do somePromise(), o programa irá demorar 3 segundos para printar "finished", porque assim que acaba a execução de somePromise, o programa cham mais duas promises com timeouts.

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

'uh, oh!'

4.3\) Quais as vantagens/desvantagens da segunda função em relação a primeira?
```js
function doSomething(options) {
    return fetch(options.url).then(r => r.json())
}

async function doSomethingAsync(options) {
    return fetch(options.url).then(r => r.json())
}
```

O uso de 'async' faz com que seja suspendido qualquer execução no contexto da função até que ela seja resolvida, se não for uma promise, ela é transformada em uma promise.

---

5\) Quais as vantagens de usar ES modules em vez de usar commonjs?

Ao usar ES modules o programador estará alinhado com os padrões definidos por quem mantém o Vanilla JS, tendo as ultimas atualizações.

---

6\) Cite as principais diferenças entre um componente e uma diretiva no AngularJS.

Diretiva é um componente modificado pelo programador, onde ele pode criar o próprio conjunto de elementos HTML e Javascript, enquanto um componente é o controlador de determinado pedaço de código de Angularjs
