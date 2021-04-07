import { Pipe, PipeTransform } from '@angular/core';
import { Data } from '@angular/router';

@Pipe({
  name: 'all'
})
export class AllPipe implements PipeTransform {

  
  transform(value: Data[], filterText?: any): Data[]{
    
    filterText= filterText?filterText.toLocaleLowerCase():null
    
    return filterText?value.filter((d:Data)=>
    d.name.toLocaleLowerCase().indexOf(filterText)!==-1 ||
    d.capital.toLocaleLowerCase().indexOf(filterText)!==-1 ||
    d.region.toLocaleLowerCase().indexOf(filterText)!==-1
    ):value;
  }
}
