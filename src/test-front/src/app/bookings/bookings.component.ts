import { Component, OnInit } from '@angular/core';
import { BookingsService } from './bookings.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.scss']
})
export class BookingsComponent implements OnInit {
  flights: any;

  constructor(private bookingsService: BookingsService) { }

  ngOnInit() {
    this.bookingsService.getFlights().subscribe((response: any) => this.flights = response)
  }

}
