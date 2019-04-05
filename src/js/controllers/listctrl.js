angular.module('mybookings').controller('ListCtrl', function ($scope, $http) {
  $http.get('https://5ba412108da2f20014654cf8.mockapi.io/api/v1/flights')
    .then(response => {
      $scope.past = [];
      $scope.upcoming = [];
      response.data.forEach(item => {
        if (Date.parse(item.outboundDate) < Date.now()) {
          $scope.past.push({
            destination: item.destination,
            outboundDate: Date.parse(item.outboundDate),
            inboundDate: Date.parse(item.inboundDate),
            thumb: item.thumb
          })
        } else {
          $scope.upcoming.push({
            destination: item.destination,
            outboundDate: Date.parse(item.outboundDate),
            inboundDate: Date.parse(item.inboundDate),
            thumb: item.thumb
          })
        }
      });
      $scope.items = response.data;
    }, err => {
      console.warn(err);
    })
    .catch(err => console.warn(err));
});