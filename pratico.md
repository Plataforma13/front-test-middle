# Prático

1\) Adicione o método `.last()` na classe `Array`, que retornará o último item do array, ou `undefined` caso o array estiver vazio

```js
// Resposta
class MyArray extends Array {
   static get [Symbol.species]() { return Array; }

	last(){
	    return this[this.length - 1]
    }
}

// Teste/Exemplos
const array1 = new MyArray(1,2,3,4,5,6,7,8,9)
console.log(array1.last()) //9

const array2 = new MyArray()
console.log(array2.last()) //undefined
```

---

2\) Melhore a função a seguir:

```js
function getTransactions() {
    return $q((resolve, reject) => {
        $http.get(BASE_URL + '/api/transacoes')
            .then(response => {
                if (!response.data.error) {
                    const transactions = response.data

                    var _transactions = []

                    for (var i in transactions) {
                        if (transactions[i].realizada)  {
                            _transactions.push({
                                id: transactions[i].id,
                                value: transactions[i].valor,
                                type: transactions[i].valor < 0 ? 'transference' : 'deposit',
                            })
                        }
                    }

                    resolve(_transactions)
                } else {
                    reject(response.data.error)
                }
            })
            .catch(e => reject(e))
    })
}
```

```js
// Resposta
function getTransactions(){
    axios.get('url', {})
        .then(response => {
            const transactions = response.data
            const _transactions = transactions.filter((transaction) => 
                { return transaction.realizada }).map((transaction) => {
                        return ({
                            id: transaction.id,
                            value: transaction.valor,
                            type: transaction.valor < 0 ? 'transactions' : 'deposit'
                        })
                    })
            console.log(_transactions)
        })
        .catch(error => {
            console.log(error)
        })
}
```

---

3\) Identifique problemas nos trechos de html/angular a seguir e corrija:

3.1)
```html
<img src="{{item.img}}">
```

[Problemas]: Como temos um código AngularJs dentro do valor de src devemos utilizar a diretiva ng-src para que
o código seja avaliado corretamente.

```html
<!-- correção -->
    <img ng-src="{{item.img}}">
```

3.2)
```html
...
<body ng-controller="PageCtrl">
    <h1>{{page.mainTitle}}</h1>
    ...
</body>
```

[Problemas]: Não encontrei problemas neste trecho, visto que o body está sendo controlado pela controller `PageCtrl` na qual pode haver um `$scope.page = {mainTitle: 'Angular', subtitle: 'js'}`.
 Porém é necessário saber que para utilizar a diretiva ng-controller devemos ter um controller em nosso projeto.

```html
<!-- correção/complemento -->
<body ng-controller="PageCtrl">
        <h1>{{page.mainTitle}}</h1>

    <script>
        var app = angular.module('myApp', []);
        app.controller('PageCtrl', function($scope) {
            $scope.page = {mainTitle: "Angular js"};

        });
    </script>
</body>
```

3.3)
```html
...
<body ng-controller="NewsletterCtrl">
    <div class="box">
        <p>Cadastre-se na nossa news semanal!</p>
        <input ng-model="email" type="email">
        <button ng-click="email && registerNewsletter(email)">
            Cadastrar
        </button>
    </div>
    ...
</body>
```

[Problemas] O codigo anterior funciona corretamente, como é apenas um input, para um form maior podemos fazer da seguinte forma:

```html
<!-- correção -->

<body ng-controller="NewsletterCtrl">
    <div class="box">
        <p>Cadastre-se na nossa news semanal!</p>
        <form name='myForm'>
            <input ng-model="name" type="text">
            <input ng-model="email" type="email">
            <button  ng-click="myForm.$valid && registerNewsletter(email)">
                Cadastrar
            </button>
        </fomr>
    </div>
    ...
</body>
```

3.4)
```js
function HomeCtrl($scope) {
    $scope.foo = 'bar'
}

```

[Problemas] Também não encontrei nenhum problema se consideramos apenas o trecho, pois ao declarar um controller podemos faze-lo assim: `app.controller('HomeCtrl', function HomeCtrl($scope) { ... }`, dando um nome à função.
Porém, caso o erro seja entender que o nome da função seria o nome da controller ai sim tempos um problema, pois o nome do controller é passado como o primeiro parametro, conforme citado anteriormente.

```js
//correção/complemento
const app = angular.module('myApp', []);
app.controller('HomeCtrl', function HomeCtrl($scope) { ... }
```

---

4\) Na pasta [src](./src), crie uma aplicação web:

4.1) Buscar os dados do endpoint:
https://5ba412108da2f20014654cf8.mockapi.io/api/v1/flights

4.2) Implementar a listagem de voos (tela "My bookings"):

![Layout](https://mir-s3-cdn-cf.behance.net/project_modules/1400/f21c0250028109.58ced3cbd06b1.jpg)
