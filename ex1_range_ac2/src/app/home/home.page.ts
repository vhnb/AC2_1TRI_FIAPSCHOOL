import { Component } from '@angular/core';
import { RangeCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  constructor() {}

  valueTips: any = ''
  priceAccount: any = ''

  onIonChange(event: RangeCustomEvent) {
    this.valueTips = parseInt(event.detail.toString())
  }

}
