# Teórico

1\) Qual a diferença do operador `==` para o operador `===` em JavaScript?

O primeiro operador, ou operador de igualdade, compara valores sem diferenciar tipos, ou seja pode comparar dois numeros iguais em forma de String ou Number. Já o segundo também chamado de operador de identidade não retorna verdadeiro quando compara tipos diferentes.

1.1) Dê 2 exemplos de quando os operadores produziriam resultados diferentes

```js
// Resposta 1

console.log( 3 == '3') // true
console.log( 3 === '3') // false

// Resposta 2

console.log( 1 == true) // true
console.log( 1 === true) // false


```

---

2\) Recursos/Práticas:

2.1) Qual recurso do javascript é mais recomendado para tratar processamentos asíncronos? Justifique.

Promises são o recurso mais moderno para execução assincrona em JavaScript. O uso dessa ferramenta garante a função observadora uma resposta, mesmo em caso de erros, permitindo também um tratamento de erros mais simplificado. Além disso o construtor ```Promise()``` permite a escrita de um código mais simples 


2.2) Quais os recursos mais recomendados para incluir ícones em um site? Justifique.

SVG, arquivos .ico e imagens png

Todos os formatos permitem fundos transparentes mas cada um possui um caso de uso específico. O SVG gera gráficos vetoriais e geralmente possui um tamanho pequeno. Pode ser usado em forma de fonte de simbolos e também em forma de arquivos separados podendo ser otimizado para diminuir o tempo de download de paginas e otimizar a renderização dos mesmos. Já o formato ico é necessário para o uso como favicon de uma página. Por fim as imagens png que são usados em icones aplicatios web progressivos(PWAs) instaláveis.

2.3) Qual recurso dos browsers é usado para carregar dados/conteúdos dinâmicos sem recarregar a página? Existem alternativas?

A plataforma web oferece três ferramentas JavaScript para a conexão a servidores: WebSockets, a fetch api e o objeto ```XMLHttpRequest```. Os WebSockets usam um protocolo específico que pode estabelecer conexões bidirecionais com o servidor. A API fetch usa o protocolo http e é baseada em Promises, o que facilita seu uso. Já o objeto XMLHttpRequest é predecessor a API fetch e é baseada em funções assincronas e ainda é usada como fallback para navegadores antigos como por exemplo o Internet Explorer.

2.4) Qual recurso angular pode ser usado para aumentar a performance de campos que realizam algum processamento ao alterar o texto?

A diretiva ng-model-options tem a opção `debounce: Number` que faz com que o model seja atualizado algum tempo depois que o usuário pare de digitar.

2.5) Por quê é importante diminuir a quantidade de watchers do angular em uma página e como fazer?

Watchers tem uma interferência significativa no desempenho de uma página Angular. Uma boa maneira de diminuir a quantidade de watchers em uma aplicação é evitar o uso `ng-repeat` e expressões que criam watchers para eventos tais como cliques 

2.6) Por quê é importante evitar escopos isolados em diretivas do angular e como fazer?

Em um projeto grande é muito útil garantir a reutilização de variaveis que guardam o estado de uma aplicação. O uso de escopos isolados impossibilita o compartilhamento de variaveis entre partes de uma aplicação.

---

3\) CSS:

3.1) Por quê é importante não fazer seletores por tags html?

Os seletores de tag html podem atrapalhar a performance da renderização de uma página com muitos elementos. Além disso esses possuem um valor especificidade muito baixo e podem ser facilmente sobrescritos com um seletor de classes.

3.2) Para criar um site que desse a opção do usuário escolher um tema, qual tecnogia/recurso de css você utilizaria?

Guardaria todas as cores de cada tema em variaveis css e trocaria classes e/ou atributos html para alterar propriedades css de dos elementos atingidos pelo tema.

3.3) Quais práticas/recursos devem ser usados para criar sites responsivo?

Recomenda-se o uso de ferramentas CSS para o desenvolvimento de sites responsivos. Isso porque quase todos os usuários tem navegadors que suportam Media queries, unidades relativas, flexbox e mais recentimente grids implicitos. Além disso as imagens são parte importante da implementação de um layout responsivo visto que as imagens podem ocupar grandes fatias do tráfego de rede de uma aplição. Para isso o HTML5 permite a adição de um grupo de imagens em uma única tag img por meio do atributo srcset. No entanto alguns sites desenvolvem paginas diferentes para diferentes tamanhos de tela, ao identificar o tipo de dispositivo conectado o servidor pode redirecionar o cliente para um subdominio onde fica o cliente web para determinado tamanho de tela.

3.4) Quais metodologias CSS você costuma seguir? Explique um pouco delas.

* Content first
* Mobile first
* Realçamento progressivo

Content first baseia-se em aplicar estilos css a uma pagina html com seu conteudo já muito definido. Isso simpliifica significamente a escolha de breakpoints para layouts responsivos.

O método mobile first consiste em desenhar layouts resposivos começando por dispositivos com as menores telas, visto que páginas para telas geralmete tem um layout mais simplificado.

Por fim o realçamento progressivo resume-se em criar layouts mais elaborados usando propriedades CSS que ainda estão em navegadores experimentais e serão publicados nas proximas  versões dos browsers.

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

Alguns milissegundos, isso porque os métodos `doSomething()` e `doSomethingElse()` serão executados paralelamente aos blocos `then executado` após `somePromise()`.

// TODO Melhorar a resposta acima

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

O código acima imprime `uh oh!`, visto que o erro lançado bloqueia a execução daquela pilha de execução, incluindo blocos then que seriam executados posteriormente.


4.3\) Quais as vantagens/desvantagens da segunda função em relação a primeira?
```js
function doSomething(options) {
    return fetch(options.url).then(r => r.json())
}

async function doSomethingAsync(options) {
    return fetch(options.url).then(r => r.json())
}
```

A segunda fução pode ser executada inteiramente de maneira assincrona, isso é uma vantagem em caso de uma atualização futura onde mais códgo pode ser adicionado antes do retorno da função para ser executado de forma assincrona. No entanto no caso proposto pela questão a segunda função pode demandar mais recursos computacionais que a primeira visto que a redundancia de promises é desnecessária em uma função que executa somente um comando.

---

5\) Quais as vantagens de usar ES modules em vez de usar commonjs?

A principal vantagem dos ES modules em relação ao commonjs é seu funcionamento pode ser feito de maneira assincrona. Além disso a sintaxe dos ES modules retira a necessidade de guardar os módulos em variaveis tornando o código mais legivel.

---

6\) Cite as principais diferenças entre um componente e uma diretiva no AngularJS.

Diretivas do AngularJS são marcações html customizadas usadas pelo compilador do framework para adicionar determinado comportamento a um elemento do DOM. Componentes são diretivas que implementam componentes reutilizaveis de uma aplicação.