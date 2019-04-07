class BookingsController {
    constructor() {
        this._container = document.querySelector('.bookings-container');
        this.initializeBookings();
    }

    showContainer(containers) {
        containers.forEach(container => {
            if (container.childElementCount > 1) {
                container.classList.remove('hidden');
            }
        });
    }

    displayBooking(past, booking) {
        let upcoming = this.container.querySelector('.upcoming');
        let pastContainer = this.container.querySelector('.past');

        if (past) {
            pastContainer.appendChild(booking);
        } else {
            upcoming.appendChild(booking);
        }

        this.showContainer([pastContainer, upcoming]);
    }

    setBooking(bookings) {
        let booking = document.createElement('div');
        booking.classList.add('bookings');
        booking.style.background = 'url(' + bookings.thumb + ') 50% 50% no-repeat';
        booking.innerHTML = `
            <div class='bookings-info'>
                <div class='destination'>${bookings.destination}</div>
                <div class='dates'>${Utils.formatDate(bookings.outboundDate)} - ${Utils.formatDate(bookings.inboundDate)}</div>
            </div>
        `;

        if (new Date() > bookings.outboundDate) {
            this.displayBooking(true, booking);
        } else {
            this.displayBooking(false, booking);
        }
    }

    initializeBookings() {
        Booking.getBookings().then(data => {
            let bookings;

            for (let booking in data) {
                bookings = new Booking();
                bookings.loadFromJson(data[booking]);
                this.setBooking(bookings);
            }
        });
    }

    get container() {
        return this._container;
    }
}