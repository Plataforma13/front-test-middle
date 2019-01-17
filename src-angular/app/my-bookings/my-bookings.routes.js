(function() {

	'use strict';

	angular
		.module('myApp.myBookings')
		.config(route);

	route.$inject = ['$routeProvider'];

	function route($routeProvider) {
		$routeProvider
			.when('/my-bookings', {
				templateUrl: 'my-bookings/my-bookings.html',
				controller: 'MyBookingsController',
				controllerAs: 'myBookings'
			})
			.otherwise({
				redirectTo: '/my-bookings'
			});
	}

})();
