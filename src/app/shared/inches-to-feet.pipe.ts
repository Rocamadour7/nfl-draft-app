import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'inchesToFeet'
})
export class InchesToFeetPipe implements PipeTransform {

  transform(value: string): string {
    let feet = Math.floor(parseInt(value)/12);
    let inches = parseInt(value)%12;
    return feet + "\' " + inches + "\"";
  }

}
