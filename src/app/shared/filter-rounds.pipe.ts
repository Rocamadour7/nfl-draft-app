import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterRounds'
})
export class FilterRoundsPipe implements PipeTransform {

  transform(items: any[], value: string): any[] {
    if (!items) return [];
    return items.filter(it => it.teams[0].pivot.round == value);
  }

}
