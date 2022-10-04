import { NgModule } from "@angular/core";
import { PaginadorGrillaComponent } from "./paginador-grilla.component";
import { MarvelServiceService } from '../../services/marvel-service.service';
import { CommonModule } from "@angular/common";



@NgModule({
    declarations:[
        PaginadorGrillaComponent
    ],
    imports:[
        CommonModule
    ],
    exports:[
        PaginadorGrillaComponent
    ]
    
})

export class PaginadorGrillaModule{

}