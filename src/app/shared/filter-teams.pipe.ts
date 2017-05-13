import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterTeams'
})
export class FilterTeamsPipe implements PipeTransform {

  transform(items: any[], value: string): any[] {
    if (!items) return [];
    return items.filter(it => it.teams[0].id == value);
  }

}
