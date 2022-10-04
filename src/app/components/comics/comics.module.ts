import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatDialogModule } from "@angular/material/dialog";
import { ComicsComponent } from "./comics.component";


@NgModule({
    declarations:[
        ComicsComponent
    ],
    imports:[
        CommonModule,
        MatDialogModule
    ],
    exports:[
        ComicsComponent
    ]
    
})

export class ComicsModule{

}