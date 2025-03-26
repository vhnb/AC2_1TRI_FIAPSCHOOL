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
  optionsToConvert: any = 'km'
  optionsForConversion: any = 'mi'
  valueToConvert: any = 0

  onConvertChange(event: RangeCustomEvent) {
    this.valueToConvert = event.target.value
  }

  calcConversion() {
    let result: number = 0

    if(this.valueToConvert === 0) {
      this.message = 'Escolha um valor'
      return
    }

    switch (this.optionsToConvert) {
      case 'km':
        if (this.optionsForConversion === 'mi') {
          result = this.valueToConvert * 0.621
        } else if (this.optionsForConversion === 'in') {
          result = this.valueToConvert * 39370.1
        } else if (this.optionsForConversion === 'ft') {
          result = this.valueToConvert * 3280.84
        }
        break

      case 'm':
        if (this.optionsForConversion === 'mi') {
          result = this.valueToConvert * 0.0006
        } else if (this.optionsForConversion === 'in') {
          result = this.valueToConvert * 39.37
        } else if (this.optionsForConversion === 'ft') {
          result = this.valueToConvert * 3.28
        }
        break

      case 'cm':
        if (this.optionsForConversion === 'mi') {
          result = this.valueToConvert * 0.000006
        } else if (this.optionsForConversion === 'in') {
          result = this.valueToConvert * 0.393
        } else if (this.optionsForConversion === 'ft') {
          result = this.valueToConvert * 0.032
        }
        break
      default:
        break
    }

    this.message = `Resultado: ${result.toFixed(2)}${this.optionsForConversion}`

  }

}
