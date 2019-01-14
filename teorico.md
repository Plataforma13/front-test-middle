# Teórico

1\) Qual a diferença do operador `==` para o operador `===` em JavaScript?

[Resposta]: Ao utilizar o operador `==` os tipos dos valores comparados não serão consideradas desde que os valores sejam iguais, já na utilização do operador `===` os do valores são considerados, logo se os valores forem iguais mas de tipos diferentes a resposta será diferente.

1.1) Dê 2 exemplos de quando os operadores produziriam resultados diferentes

```js
// Resposta

//Exemplo 1
if( 0 == false)
    console.log('Verdadeiro'); //resultado
else
   console.log('Falso');

if( 0 === false)
    console.log('Verdadeiro');
else
   console.log('Falso'); //resultado

//Exemplo 2
if( 7 == '7')
    console.log('Verdadeiro'); //resultado
else
   console.log('Falso');

if( 7 === '7')
    console.log('Verdadeiro');
else
   console.log('Falso'); //resultado
```

---

2\) Recursos/Práticas:

2.1) Qual recurso do javascript é mais recomendado para tratar processamentos asíncronos? Justifique.

[Resposta]: O que é mais recomendado creio que seja subjetivo, pois depende do problema encontrado e da forma como o programador os trata, no entanto eu prefiro as Async Functions / await.

[Justificativa]: As Async Functions/await deixam o codigo muito mais claro e simples quando temos um grupo de promessas encadeadas para qual devemos executar procedimentos comparando com callbacks por exemplo. Além disso ao utilizar o await o depurador é parado esperando que o trabalho seja executado para continuar para a proxima linha, tornando o processo muito mais simples.

2.2) Quais os recursos mais recomendados para incluir ícones em um site? Justifique.

[Resposta]: Tag <span>

[Justificativa]: Atualmente a tag <i> vem sendo muito usada para adicionar icones, no entando não é uma pratica correta visto que não corresponde à semântica para qual a tag foi criada, já a tag <span> é uma tag geral que não há semântica definida.

Vejamos as definições de ambas as tags pelo HTML5:

" A tag <i> define uma parte do texto em uma voz ou humor alternativo. O conteúdo da tag <i> geralmente é exibido em itálico.A tag <i> pode ser usada para indicar um termo técnico, uma frase de outro idioma, um pensamento ou um nome de navio, etc. "

"A tag <span> é usada para agrupar elementos inline em um documento. A tag <span> não fornece nenhuma alteração visual por si só."

2.3) Qual recurso dos browsers é usado para carregar dados/conteúdos dinâmicos sem recarregar a página? Existem alternativas?

[Resposta]: Existe o two-way data binding utilizado pelo Angular, por exemplo. No entanto o React utiliza o one-way data binding. 
No modo two-way data binding quando há uma modificação na view é refletido automaticamente no model, e vice-versa.
No modo one-way data binding sendo utilizado pelo React quando algo é alterado, vamos usar como exemplo um texto em um input, um evento é disparado alterando o estado do componente, assim componente é renderizado novamente com os novos dados.

2.4) Qual recurso angular pode ser usado para aumentar a performance de campos que realizam algum processamento ao alterar o texto?

[Resposta]

2.5) Por quê é importante diminuir a quantidade de watchers do angular em uma página e como fazer?

[Resposta]

2.6) Por quê é importante evitar escopos isolados em diretivas do angular e como fazer?

[Resposta]

---

3\) CSS:

3.1) Por quê é importante não fazer seletores por tags html?

[Resposta]: Seletores por tags HTML pode ser uteis se quisermos adicionar um estilo geral para toda aplicação, no entando pode ser um problema, pois nem sempre um estilo irá se encaixar para todos os contextos de uma determinada tag, podendo desconfigurar o design da página sobrepondo algum estilo definido por outros tipos de seletores.


3.2) Para criar um site que desse a opção do usuário escolher um tema, qual tecnogia/recurso de css você utilizaria?

[Resposta]: Confesso nunca ter feito algo deste tipo com css puro, mas a ajuda do sass seria muito importante neste contexto. Já realizei tal implementação utilizando a biblioteca styled-component que casa muito bem com a ideia de componentização do React Js. A mesma possui uma forma para passar o tema escolhido para os componentes. Podemos criar um arquivo com as variáveis para cada cor para os diferentes temas, envolver toda a aplicação com a tag <ThemeProvider> fazendo todos os componentes com estilo ter acesso ao tema fornecido

3.3) Quais práticas/recursos devem ser usados para criar sites responsivo?

Noções importantes
    -Conhecer as resoluções dos dispositivos do seu pulico alvo;
    -Usar medidas absolutas pode ser um problema, a recomendação é utilizar medidas relativas, como por exemplo, porcentagens.
    -Nunca se esquecer de utilizar imagens flexiveis

Ferramentas:
    - Media query
    - Flex box
    - Max e Min width, simples mas de grande ajuda.

[Resposta]

3.4) Quais metodologias CSS você costuma seguir? Explique um pouco delas.

[Resposta]: Ultimamente venho utilizado a biblioteca styled-component para estilização, que é uma forma diferente de se utilizar css junto com javascript. Parece estranho, mas a ideia de componentização tem revolucionado esta visão.

[Explicacão]: Com o styled-components podemos componentizar também o css, colocando a estilização no mesmo arquivo.
O estilo vira simplesmente uma tag/componente deixando o codigo mais limpo e objeito, vamos à um exemplo:

const Head = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 30px;
  background-color: #f4f4f5;
  box-shadow: 0 0 5px 0 #999;
`;
const Header = () => (
  <Head>
    <span>teste header</p>
  </Head>
);
`

O styled-components também nos permite passar o valor do estilo, com isso podemos mudar os estilos baseado nas props passadas, ao invés de adicionar classes ao nosso HTML, como é feito tradicionalmente com CSS.

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

[Resposta]: 3 segundos / 3 milissegundos

[Justificativa]: No codigo é utilizado o método setTimeout() que chama uma função ou avalia uma expressão após um número especificado de milissegundos, neste caso foi passado 1000 milissegundos para a função doSomething e 2000 para doSomethingElse. Assim o segungo then irá esperar a resposta do primeiro para que ele seja executado.

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

[Resposta]: Não ira imprimir nada apenas exibir o erro.
[Justificativa]: Pois como uma exceção foi lançado o codigo após o throw não será executado.

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

[Resposta]: 
