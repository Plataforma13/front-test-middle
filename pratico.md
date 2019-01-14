# Prático

1\) Adicione o método `.last()` na classe `Array`, que retornará o último item do array, ou `undefined` caso o array estiver vazio

```js
// Resposta
Array.prototype.last = function(){
    return this[this.length -1];
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
    function getTransactions() {
        return $q((resolve, reject) => {
            $http.get(BASE_URL + '/api/transacoes')
                .then(response => {
                    if (!response.data.error) {
                        const transactions = response.data
                        let _transactions = []
    
                        transactions
                            .filter(transaction => {
                                transaction.realizada
                            })
                            .forEach(transaction => {
                                _transactions.push(defineTransaction(transaction.id, transaction.valor))
                            });
                        resolve(_transactions)
                    } else {
                        reject(response.data.error)
                    }
                })
                .catch(e => reject(e))
        })
    }

    function defineTransaction(id, value){
        const result = {
            id,
            value,
            type: vaue < 0 ? 'transference' : 'deposit',
        };
        return result;
    }
```

---

3\) Identifique problemas nos trechos de html/angular a seguir e corrija:

3.1)
```html
<img src="{{item.img}}">
```

[Problemas]

```html
<!-- correção -->
<img ng-src="{{item.img}}" alt="Descrição da imagem">
```

3.2)
```html
...
<body  ng-controller="PageCtrl">
    <h1>{{page.mainTitle}}</h1>
    ...
</body>
```

Neste trecho a aplicação angular não estava sendo inicializada, por isso inseri a diretiva ng-app.
Também modifiquei a chamada da controller pois é uma boa prática usar a funcionalidade ControllerAs.

```html
<body ng-app="app" ng-controller="PageCtrl as page">
    <h1>{{page.mainTitle}}</h1>
    ...
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

Fiz as modificações como na questão anterior.
Alterei a tag do texto "Cadastre-se na nossa news semanal!" pois aparentemente se trata de um título, não um parágrafo.
Inseri o atributo required na tag `input` o que evita a evita a verificação do email para validação na chamada da diretiva `ng-click`.


```html
<body ng-app="app" ng-controller="NewsletterCtrl as news">
    <div class="box">
        <h1>Cadastre-se na nossa news semanal!</h1>
        <input ng-model="news.email" type="email" required>
        <button ng-click="news.registerNewsletter(news.email)">
            Cadastrar
        </button>
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
