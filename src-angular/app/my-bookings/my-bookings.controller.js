(function() {

	'use strict';

	angular
		.module('myApp.myBookings')
		.controller('MyBookingsController', MyBookingsController);

    MyBookingsController.$inject = ['MyBookingsService'];
    
	function MyBookingsController(MyBookingsService) {

		const vm = this;
		
		function loadCards(flights) {
			vm.upcomingFlights = flights.filter(flight => new Date(flight.outboundDate) > new Date())
			vm.pastFlights = flights.filter(flight => new Date(flight.outboundDate) <= new Date());
		}
				
		function formatDate(unFormattedDate){
			const options = { day: 'numeric', month: 'short' };
			const formattedDate = new Date(unFormattedDate);
			return formattedDate.toLocaleDateString("en-GB", options);
		}
		
		function init() {
			MyBookingsService.getBookings().then(
				response => {
					let bookings = response.data;
					bookings.forEach(
						booking => {
							booking.outboundDateFormatted = formatDate(booking.outboundDate);
							booking.inboundDateFormatted = formatDate(booking.inboundDate);
							}
						);
					loadCards(bookings);
				},
				error => console.error(error)
			)
		}
		
		init();

	}

})();
