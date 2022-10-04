import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { TopMenuBarComponent } from './top-menu-bar.component';


@NgModule({
    declarations:[
        TopMenuBarComponent
    ],
    imports:[
        CommonModule
    ],
    exports:[
        TopMenuBarComponent
    ]
    
})

export class TopMenuBarModule{

}