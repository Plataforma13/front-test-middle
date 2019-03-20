'use strict';

let app = angular.module('app', []);

app.controller('ListControler', function ($scope, $http) {
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

app.component('bookingList', {
  template:
    '    <div class="bookings-list" >\n' +
    '      <h4 class="list-title">{{$ctrl.title}}</h4>\n' +
    '      <ul>\n' +
    '        <li class="bookings-list-item" ng-repeat="item in $parent[$ctrl.title] | orderBy:\'outbounddate\'">\n' +
    '          <img class="thumbnail"\n' +
    '               src="{{item.thumb}}" alt="Madrid">\n' +
    '          <div class="details">\n' +
    '            <span class="title">{{item.destination}}</span>\n' +
    '            <span class="date">{{item.inboundDate | date: \'dd MMM\'}} - {{item.outboundDate | date: \'dd MMM\' }}</span>\n' +
    '          </div>\n' +
    '        </li>\n' +
    '      </ul>' +
    '    </div>',
  controller: function ($scope) {

  },
  bindings: {
    title: '@'
  }
});
