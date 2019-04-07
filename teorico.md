# Teórico

1\) Qual a diferença do operador `==` para o operador `===` em JavaScript?

[Resposta]

O operador `==` compara a igualdade de dois valores, independente do tipo, já o operador `===` compara se tanto o valor quanto o tipo são idênticos.

1.1) Dê 2 exemplos de quando os operadores produziriam resultados diferentes

```js
// Resposta
3 == '3'  true
3 === '3' false
```

---

2\) Recursos/Práticas:

2.1) Qual recurso do javascript é mais recomendado para tratar processamentos asíncronos? Justifique.

[Resposta]

Ajax - XMLHttpRequest

[Justificativa]

O Ajax consegue capturar informações de outros servidores, de forma rápida e sem recarregar a página, tornando a experiência mais satisfatória para o usuário, que não precisa se preocupar com as interações com os servidores.

2.2) Quais os recursos mais recomendados para incluir ícones em um site? Justifique.

[Resposta]

Utilizar bibliotecas css.

[Justificativa]

Bibliotecas css de ícones traz um pacote completo de ícones identificados por classes, esses ícones podem ser facilmente adicionados incluindo a classe do ícone na tag html que o receberá.

2.3) Qual recurso dos browsers é usado para carregar dados/conteúdos dinâmicos sem recarregar a página? Existem alternativas?

[Resposta]

2.4) Qual recurso angular pode ser usado para aumentar a performance de campos que realizam algum processamento ao alterar o texto?

[Resposta]

2.5) Por quê é importante diminuir a quantidade de watchers do angular em uma página e como fazer?

[Resposta]

É importante para trazer mais velocidade para a aplicação, os watchers podem consumir muito processamento da aplicação, tornando-as mais lentas. Para diminuir a quantidade de watchers, pode-se usar as 'one-time expressions', que são expressões que começam com '::' e irão fazer com que o evento seja disparado uma única vez.

2.6) Por quê é importante evitar escopos isolados em diretivas do angular e como fazer?

[Resposta]

---

3\) CSS:

3.1) Por quê é importante não fazer seletores por tags html?

[Resposta]

Porque se fizer seletores pelas tags html, todos os elementos da tag receberão o estilo, mesmo que não fosse para estilizar o elemento, e também deixando a folha de estilo muito pesada.

3.2) Para criar um site que desse a opção do usuário escolher um tema, qual tecnogia/recurso de css você utilizaria?

[Resposta]

Variáveis em css para armazenar os dados dos usuários e estilizar todo o site de forma padrão.

3.3) Quais práticas/recursos devem ser usados para criar sites responsivo?

[Resposta]

Podem ser usados layouts flex ou grid.

3.4) Quais metodologias CSS você costuma seguir? Explique um pouco delas.

[Resposta]

SMACSS

[Explicacão]

Trabalho os seletores englobando características para as partes que se repetem do layout e que podem ser reutilizadas.

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

O código imprimirá 'finished' imediatamente, sem nenhum atraso.

[Justificativa]

Para que o código imprima 'finished' ele só depende do retorno de 'somePromise' e não será afetado pelas demais funções.

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

Irá imprimir 'uh oh!'.

[Justificativa]

O código atribuíra um erro na execução quando passar por 'throw new Error('uh oh!')'.

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

A vantagem é que um valor retornado por uma função async é passado por Promise.resolve.

---

5\) Quais as vantagens de usar ES modules em vez de usar commonjs?

[Resposta]

Os ES modules trabalham de forma melhor e mais leve, tanto no server-side quanto no client-side, enquanto o commonjs trabalha bem apenas no server-side, tendo que usar alguma ferramenta para simular um ambiente server-side no client-side para sua utilização.

---

6\) Cite as principais diferenças entre um componente e uma diretiva no AngularJS.

[Resposta]

Diretivas geram componentes html que não possuem escopos isolados e nem binding.
Componente supre essa necessidade, criando componentes html com escopo isolado e binding para controller.
