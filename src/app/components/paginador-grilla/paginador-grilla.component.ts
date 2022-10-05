import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MarvelServiceService } from '../../services/marvel-service.service';

@Component({
  selector: 'app-paginador-grilla',
  templateUrl: './paginador-grilla.component.html',
  styleUrls: ['./paginador-grilla.component.scss']
})
export class PaginadorGrillaComponent implements OnInit {
  data:any;
  azOrder:boolean=false;
  page:number=1;
  constructor(private api:MarvelServiceService, private router:Router) { }

  ngOnInit(): void {
    this.api.getMarvel(this.page).subscribe((res:any) => {
      this.data=res.data.results;
    });
  }
  changePage(page:number){
    if(page>=3){
      page=3;
    }
    if(page<=1){
      page=1;
    }
    this.page=page;
    this.api.getMarvel(this.page).subscribe((res:any) => {
      this.data=res.data.results;
    });
  }
  goToHero(id:number){
    this.router.navigate(["/detalle/"+id]);
  }
  changeOrder():void{
    if(this.azOrder)
    this.data=this.data.sort((a:any,b:any)=>0-(a.name<b.name?1:-1));
    else
    this.data=this.data.sort((a:any,b:any)=>0-(a.name>b.name?1:-1));

    this.azOrder=!this.azOrder;
  }
}
