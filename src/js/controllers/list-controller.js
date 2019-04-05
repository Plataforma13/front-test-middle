angular.module('mybookings').controller('ListController', function ($scope, $http) {

        $http.get('https://5ba412108da2f20014654cf8.mockapi.io/api/v1/flights')
        .then( retorno => {
            $scope.upcoming = [];
            $scope.past = [];
            retorno.data.forEach(item => {
                if (Date.parse(item.outboundDate) < Date.now()) {
                    $scope.past.push({
                        destination: item.destination,
                        outboundDate: item.outboundDate,
                        inboundDate: item.inboundDate,
                        thumb: item.thumb
                    })
                } else {
                    $scope.upcoming.push({
                        destination: item.destination,
                        outboundDate: item.outboundDate,
                        inboundDate: item.inboundDate,
                        thumb: item.thumb
                    })
                }
            });

    }).catch(function (erro) {
        console.log(error);

    })
})