import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decimalToFraction'
})
export class DecimalToFractionPipe implements PipeTransform {

  transform(value: string): any {
    let inches = Math.floor(parseInt(value));
    let remainder = parseFloat(value) - inches;
    let fraction = "";
    switch(remainder) {
      case .125:
      fraction = "1/8";
      break;
      case .25:
      fraction = "1/4";
      break;
      case .375:
      fraction = "3/8";
      break;
      case .5:
      fraction = "1/2";
      break;
      case .625:
      fraction = "5/8";
      break;
      case .75:
      fraction = "3/4";
      break;
      case .875:
      fraction = "7/8";
      break;
    }
    return inches + " " + fraction + "\"";
  }

}
