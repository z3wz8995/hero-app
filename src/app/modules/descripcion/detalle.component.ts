import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { MarvelServiceService } from "src/app/services/marvel-service.service";

@Component({
    selector:"app-detalle",
    templateUrl:"./detalle.component.html",
    styleUrls:["./detalle.component.scss"]
})
 export class DetalleComponent implements OnInit{
    data: any;
    comics: any;
    stories: any;
    events: any;
    constructor(private api:MarvelServiceService, private route:ActivatedRoute){}
    ngOnInit(): void {
        this.route.params.subscribe(r =>{ 
            if(r["id"]){
                this.api.getMarvelbyid(r["id"]).subscribe((res:any) => {
                    this.data=res.data.results[0];
                    console.log(res);
                  });
                this.api.getMarvelcomicsbyid(r["id"]).subscribe((res:any) => {
                    this.comics=res.data.results;
                    console.log(res);
                });
                this.api.getMarvelstoriesbyid(r["id"]).subscribe((res:any) => {
                    this.stories=res.data.results;
                    console.log(res);
                    
                });
                this.api.getMarveleventsbyid(r["id"]).subscribe((res:any) => {
                    this.events=res.data.results;
                    console.log(res);
                });
            }
        })
    }
 }
