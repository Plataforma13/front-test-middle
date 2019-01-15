import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseComponent } from '~/app/framework/core';
import { routeAnimation } from '~/app/shared';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [routeAnimation]
})
export class HomeComponent extends BaseComponent {

  flightData: any;

  ngOnInit() {
    const axios = require('axios');

    // Make a request for a user with a given ID
    axios.get('https://5ba412108da2f20014654cf8.mockapi.io/api/v1/flights')
      .then((response: any) => {
        // handle success
        console.log(response);
        
        this.flightData = response.data;
      })
      .catch((error: any) => {
        // handle error
        console.log(error);
      })
      .then(() => {
        // always executed
      });

    // Want to use async/await? Add the `async` keyword to your outer function/method.
    // async function getUser() {
    //   try {
    //     const response = await axios.get('https://5ba412108da2f20014654cf8.mockapi.io/api/v1/flights');
    //     console.log(response.data);
        
    //     return response.data;
    //     // $scope.valor = response.data[0].destination;
    //   } catch (error) {
    //     console.error(error);
    //   }
    // }
  }

}
