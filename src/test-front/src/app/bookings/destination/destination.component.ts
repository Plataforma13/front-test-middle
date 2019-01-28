import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.scss']
})
export class DestinationComponent implements OnInit {

  @Input() destination: any;

  constructor() { }

  ngOnInit() {
  }

}
