# Prático

1\) Adicione o método `.last()` na classe `Array`, que retornará o último item do array, ou `undefined` caso o array estiver vazio

```js
Array.prototype.last = function(){
    return this == [] ? undefined : this[this.length -1];
}

// Teste/Exemplos
const array1 = [1,2,3,4,5,6,7,8,9]
console.log(array1.last()) //9

const array2 = []
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
```

---

3\) Identifique problemas nos trechos de html/angular a seguir e corrija:

3.1)
```html
<img src="{{item.img}}">
```

data-binding necessário somente pra leitura.
imagem sem texto alternativo

```html
<img src="{{::item.img}}" alt="{{::item.name}}">
```

3.2)
```html
...
<body ng-controller="PageCtrl">
    <h1>{{page.mainTitle}}</h1>
    ...
</body>
```

Aplicação não declarada

```html
<body ng-app="app" ng-controller="PageCtrl">
    <h1>{{page.mainTitle}}</h1>
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

Aplicação não declarada.
ng-click chamando model.
botão habilitado sem dados.

```html
<body ng-app="app" ng-controller="NewsletterCtrl">
    <div class="box">
        <p>Cadastre-se na nossa news semanal!</p>
        <input ng-model="email" type="email">
        <button ng-disabled="!email" ng-click="registerNewsletter(email)">
            Cadastrar
        </button>
    </div>
</body>
```

3.4)
```js
function HomeCtrl($scope) {
    $scope.foo = 'bar'
}

```

[Problemas]

```js
//correção
```

---

4\) Na pasta [src](./src), crie uma aplicação web:

4.1) Buscar os dados do endpoint:
https://5ba412108da2f20014654cf8.mockapi.io/api/v1/flights

4.2) Implementar a listagem de voos (tela "My bookings"):

![Layout](https://mir-s3-cdn-cf.behance.net/project_modules/1400/f21c0250028109.58ced3cbd06b1.jpg)
