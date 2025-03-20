import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  constructor() { }

  typeFuel: any = ''
  pricePerLiter: any = ''
  amountKmDriven: any = ''
  message: any = ''
  calcButton = ['OK']

  calcFunction() {
    let kmPerLiter = 0

    switch (this.typeFuel) {
      case 'etanol':
        kmPerLiter = 9
        break
      case 'gasolina':
        kmPerLiter = 12
        break
      case 'diesel':
        kmPerLiter = 15
        break
      default:
        this.message = "Selecione um tipo de combustível"
        return
    }

    const literNecessary = this.amountKmDriven / kmPerLiter
    const costTotal = (literNecessary * this.pricePerLiter).toFixed(2)

    if(this.pricePerLiter === '' || this.amountKmDriven === '') {
      this.message = 'Complete os campos'
      return
    }

    this.message = `Valor total a pagar por combustível: ${costTotal}`

  }

}
