import { NgModule } from "@angular/core";
import { BottomMenuBarComponent } from './bottom-menu-bar.component';
import { CommonModule } from '@angular/common';


@NgModule({
    declarations:[
        BottomMenuBarComponent
    ],
    imports:[
        CommonModule
    ],
    exports:[
        BottomMenuBarComponent
    ]
    
})

export class BottomMenuBarModule{

}