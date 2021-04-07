import { Pipe, PipeTransform } from '@angular/core';
import { Data } from '@angular/router';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: Data[], filterText?: any): Data[]{
    
    filterText= filterText?filterText.toLocaleLowerCase():null
    
    return filterText?value.filter((d:Data)=>d.capital.toLocaleLowerCase().indexOf(filterText)!==-1):value;
  }

}
