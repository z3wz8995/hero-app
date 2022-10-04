import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { InfoComponent } from "./info.component";


@NgModule({
    declarations:[
        InfoComponent
    ],
    imports:[
        CommonModule
    ],
    exports:[
        InfoComponent
    ]
    
})

export class InfoModule{

}