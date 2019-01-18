# Teórico

1\) Qual a diferença do operador `==` para o operador `===` em JavaScript?

o "===" tambem verifica se o tipo é o mesmo.

1.1) Dê 2 exemplos de quando os operadores produziriam resultados diferentes

let a:Number = 1

let b:string = "1"

if(a == b)
//true

if( a === b)
//false

---

2\) Recursos/Práticas:

2.1) Qual recurso do javascript é mais recomendado para tratar processamentos asíncronos? Justifique.

Callback Porque ela é tipicamente passada como argumento de outra função e/ou chamada quando um evento for acontecido, ou quando uma parte de código receber uma resposta de que estava à espera.


2.2) Quais os recursos mais recomendados para incluir ícones em um site? Justifique.

Eu baixo e chamo no html.

"Caso seja outro quero saber a resposta por favor"

2.3) Qual recurso dos browsers é usado para carregar dados/conteúdos dinâmicos sem recarregar a página? Existem alternativas?
Existe o ajax e um exemplo onde voce pega os dados de um servidor e muda parte do seu site.

2.4) Qual recurso angular pode ser usado para aumentar a performance de campos que realizam algum processamento ao alterar o texto?

Eu faria assim
<input ng-model="typeName" placeHolder="type your name please" /> 
		<span>	 Hi {{typeName}} </span>

        "Caso seja outro quero saber a resposta por favor"

2.5) Por quê é importante diminuir a quantidade de watchers do angular em uma página e como fazer?

Fica muito lenta a aplicação. Pra resolver e so impedir que se acesse o dom sem necessidade.

2.6) Por quê é importante evitar escopos isolados em diretivas do angular e como fazer?

Escopo pode ser lido em qualquer parte da pagina pode causar confusão e causar erro.
quando for possivel use 'let', 'const' para impedir.

---

3\) CSS:

3.1) Por quê é importante não fazer seletores por tags html?

existe varias tags repedida na pagina mas muitas tem um estilo diferente. Aconselho a usar classes.

3.2) Para criar um site que desse a opção do usuário escolher um tema, qual tecnogia/recurso de css você utilizaria?

No ssas eu uso variavel eu trocando a variavel eu troco a cor do site todo.



3.3) Quais práticas/recursos devem ser usados para criar sites responsivo?

Buscar usar  "%", "rem", "em" como medida.
Verificar varias possiveis resoluções do site e mudar o css se necessario
Deixar o Desing mobile mais minimalista sem perder a cara do site.




3.4) Quais metodologias CSS você costuma seguir? Explique um pouco delas.

Mais puxado pro "BEM" gosto que tudo fica intuitivo na hora que precisar refatorar.

  <div class="card">
    <div class="card-title">...</div>
    <div class="card-text  text-opaque">...</div>
  </div>

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

Quando ele passar pelo primeiro then vai nem esperar o tempo por que tem nada encadeando


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

"uh oh! uh oh!"

Vai dar erro dentro no primeiro then ai vai chamar o console do erro.

4.3\) Quais as vantagens/desvantagens da segunda função em relação a primeira?
```js
function doSomething(options) {
    return fetch(options.url).then(r => r.json())
}

async function doSomethingAsync(options) {
    return fetch(options.url).then(r => r.json())
}
```

 async define uma função assíncrona ele e bom pra função sem retorno
 dependendo como de se usar pode piorar a performace

---

5\) Quais as vantagens de usar ES modules em vez de usar commonjs?

[Resposta]

---

6\) Cite as principais diferenças entre um componente e uma diretiva no AngularJS.

Componente para partes reutilizáveis na aplicação por exemplo criar um Componente card que seria usado em varios lugares da aplicação

Já uma diretiva é apropriada quando é necessário manipular o DOM ou trabalhar com eventos.
Eu ja usei pro googleMaps onde alterava bem o DOM 
