
import { applySourceSpanToExpressionIfNeeded } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import axious from "axios";





import {JSONPlaceholderService} from './services/jsonplaceholder.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-app';
  //countrtList:{name:String, capital:String,region:String, flag:SVGSymbolElement}[]=countries;
  url='https://restcountries.eu/rest/v2/all';
  result= [] as any ;
  data:Array<any>
  filterText=""
  filterAll=""

  region = String;
  
   constructor(private JSONPlaceholder: JSONPlaceholderService){
     this.data =new Array<any>()
   }
    getDataFromApi()
    {
      this.JSONPlaceholder.getData().subscribe((data)=>{
        console.log(data)
        this.data=data;

      })

    

      
    }
   
  

  
  
}
