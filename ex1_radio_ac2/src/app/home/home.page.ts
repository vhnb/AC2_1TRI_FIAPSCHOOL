import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  constructor() { }

  typeVehicle: any = ''
  amountKmDriven: any = ''
  message: any = ''
  calcButton = ['OK']

  calcFunction() {
    let initialFee = 0
    let kmDriven = 0

    switch (this.typeVehicle) {
      case 'normal':
        initialFee = 5.00
        kmDriven = 2.50
        break
      case 'superior':
        initialFee = 7.50
        kmDriven = 3.50
        break
      case 'vip':
        initialFee = 10.00
        kmDriven = 5.50
        break
      default:
        this.message = "Selecione um tipo de veículo"
        return
    }

    const totalValue = initialFee + (this.amountKmDriven * kmDriven)

    let driverPart = 0.75
    let appPart = 0.25

    if (totalValue > 150) {
      driverPart = 0.80
      appPart = 0.20
    }

    const valueApp = totalValue * appPart
    const valueDriven = totalValue * driverPart

    this.message = `Valor final: ${totalValue}\nValor do motorista: ${valueDriven}\nValor do aplicativo: ${valueApp}`
  }

}
