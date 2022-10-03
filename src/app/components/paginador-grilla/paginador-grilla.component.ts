import { Component, OnInit } from '@angular/core';
import { MarvelServiceService } from '../../services/marvel-service.service';

@Component({
  selector: 'app-paginador-grilla',
  templateUrl: './paginador-grilla.component.html',
  styleUrls: ['./paginador-grilla.component.scss']
})
export class PaginadorGrillaComponent implements OnInit {
  data:any;
  azOrder:boolean=false;
  constructor(private api:MarvelServiceService) { }

  ngOnInit(): void {
    this.api.getMarvel().subscribe((res:any) => {
      this.data=res.data.results;
      console.log(res)
    });
  }
  changeOrder():void{
    if(this.azOrder)
    this.data=this.data.sort((a:any,b:any)=>0-(a.name<b.name?1:-1));
    else
    this.data=this.data.sort((a:any,b:any)=>0-(a.name>b.name?1:-1));

    this.azOrder=!this.azOrder;
  }
}
