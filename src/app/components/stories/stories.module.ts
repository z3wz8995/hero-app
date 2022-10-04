import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatDialogModule } from "@angular/material/dialog";
import { StoriesComponent } from "./stories.component";


@NgModule({
    declarations:[
        StoriesComponent
    ],
    imports:[
        CommonModule,
        MatDialogModule
    ],
    exports:[
        StoriesComponent
    ]
    
})

export class StoriesModule{

}