import { Component } from '@angular/core';
import { RangeCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  constructor() { }

  message: any = ''
  valueHeight: any = 0
  valueWeight: any = 0

  onHeightChange(event: RangeCustomEvent) {
    this.valueHeight = event.detail.value
  }

  onWeightChange(event: RangeCustomEvent) {
    this.valueWeight = event.detail.value
  }

  calcImc() {
    const imc = this.valueWeight / ((this.valueHeight / 100) ** 2)
    this.message = this.getImcMessage(imc)
  }

  getImcMessage(imc: any): any {
    if (imc < 18.5) return `Seu IMC é ${imc.toFixed(2)} e você está abaixo do peso`
    if (imc < 24.9) return `Seu IMC é ${imc.toFixed(2)} e você está no peso normal`
    if (imc < 29.9) return `Seu IMC é ${imc.toFixed(2)} e você está com sobrepeso`
    if (imc < 34.9) return `Seu IMC é ${imc.toFixed(2)} e você está com obesidade`
    if (imc < 35) return `Seu IMC é ${imc.toFixed(2)} obesidade grau I`
    if (imc < 40) return `Seu IMC é ${imc.toFixed(2)} obesidade grau II`
    if (imc > 40) return `Seu IMC é ${imc.toFixed(2)} obesidade grau III`
  }
}
