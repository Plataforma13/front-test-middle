# Teórico

1\) Qual a diferença do operador `==` para o operador `===` em JavaScript?

== compara somente o valor
=== compara tipo e valor

1.1) Dê 2 exemplos de quando os operadores produziriam resultados diferentes

1 == true  //true, pois 1 equivale a verdadeiro
1 === true //false, pois 1 é do tipo number e true é booleano logo não são iguais

---

2\) Recursos/Práticas:

2.1) Qual recurso do javascript é mais recomendado para tratar processamentos asíncronos? Justifique.

Em vanilla javascript funções async/await retornando promises. Não interrope o fluxo da pagina e os dados podem ser tratados ao final na resposta da promise isoladamente. 

2.2) Quais os recursos mais recomendados para incluir ícones em um site? Justifique.

font icons ou svg. No caso de font icons, prefenrencialmente usar geradores como exemplo fontello, onde cria somente a partir de sua necessidade deixando os arquivos mais leve. Também usando com a tag span pois essa tag não tem semantica como a mais usada que é a tag i.
São os mais recomendados por serem vetor e tendo boa qualidade em qualquer tela e qualquer tamanho.

2.3) Qual recurso dos browsers é usado para carregar dados/conteúdos dinâmicos sem recarregar a página? Existem alternativas?

chamada de dados assincrona.

2.4) Qual recurso angular pode ser usado para aumentar a performance de campos que realizam algum processamento ao alterar o texto?

Criar um 'debounce time', pois espera o tempo determinado para comecar o processamento, evitando fazer varias chamadas a cada caractere digitado.

2.5) Por quê é importante diminuir a quantidade de watchers do angular em uma página e como fazer?

Pois cada alteração em um watcher, todos outros são acionados para verificar se houve mudança.
Em angularJS o uso de :: nos databinds que devem ser somente lidos uma vez.
Em Angular determinar o tipo de databind se sera one-way ou two-way e sua direção.

2.6) Por quê é importante evitar escopos isolados em diretivas do angular e como fazer?

Diretivas não foram feitas para escopo isolado, são mais utilizadas como funcoes auxiliares para todo o projeto.

---

3\) CSS:

3.1) Por quê é importante não fazer seletores por tags html?

perde a reutilização de stilo e altera todas as tags do projeto causando mais codigo pra corrigir estilos em determinados contextos

3.2) Para criar um site que desse a opção do usuário escolher um tema, qual tecnogia/recurso de css você utilizaria?

Sass/scss ou variaveis em css

3.3) Quais práticas/recursos devem ser usados para criar sites responsivo?

preferencialmente começar o desenvolvimento pensando em mobile first, uso de media query, imagens fluidas ou por determinados tamanhos pre definidos, uso de unidades de medidas relativas.

3.4) Quais metodologias CSS você costuma seguir? Explique um pouco delas.

depende do projeto, mas geralmente o que considero melhor de cada. O que mais sigo é BEM, SMACSS e SASS.
BEM defino estrutura de componentes e filhos
SMACSS organizo o codigo em areas como layout/vendor/module e etc
SASS para quebrar em arquivos menores e uso de algumas de suas features

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


2000ms. Nesse caso uma função não depende da outra pra ser iniciada.

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

'ok now!'
erro lancado no primeiro bloco then, segue pro proximo e imprime a mensagem.


4.3\) Quais as vantagens/desvantagens da segunda função em relação a primeira?
```js
function doSomething(options) {
    return fetch(options.url).then(r => r.json())
}

async function doSomethingAsync(options) {
    return fetch(options.url).then(r => r.json())
}
```

---

5\) Quais as vantagens de usar ES modules em vez de usar commonjs?

[Resposta]

---

6\) Cite as principais diferenças entre um componente e uma diretiva no AngularJS.

componente 'empacota um escopo' e trabalha somente naquele contexto, ja a diretiva é somente uma extensão do HTML
