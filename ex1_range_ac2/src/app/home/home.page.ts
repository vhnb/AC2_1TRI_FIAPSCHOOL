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

  valueTips: any = 0
  priceAccount: any = ''
  tipAmount:any = ''
  totalAmount: any = ''
  message: any = ''
  calcButton = ['OK']

  onIonChange(event: RangeCustomEvent) {
    this.valueTips = event.detail.value
  }

  calcTip() {
    this.tipAmount = ((this.priceAccount * this.valueTips) / 100).toFixed(2)

    const priceAccount = parseFloat(this.priceAccount)
    const tipAmount = parseFloat(this.tipAmount)

    this.totalAmount = priceAccount + tipAmount

    this.message = `Valor da gorjeta: ${this.tipAmount}\n Valor total da conta: ${this.totalAmount}`
  }

}
