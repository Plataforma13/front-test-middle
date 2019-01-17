(function() {

    'use strict';

    angular
        .module('myApp.services')
        .service('MyBookingsService', MyBookingsService);

        MyBookingsService.$inject = ['$http'];

    function MyBookingsService($http) {
        
        const service = {};

        service.getBookings = getBookings;

        function getBookings() {
            return $http.get('https://5ba412108da2f20014654cf8.mockapi.io/api/v1/flights');
        }

        return service;
    }

})();
