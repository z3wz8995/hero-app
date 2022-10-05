import { NgModule } from "@angular/core";
import { BottomMenuBarComponent } from './bottom-menu-bar.component';
import { CommonModule } from '@angular/common';
import { TopMenuBarModule } from '../top-menu-bar/top-menu-bar.module';


@NgModule({
    declarations:[
        BottomMenuBarComponent
    ],
    imports:[
        CommonModule,
        TopMenuBarModule
    ],
    exports:[
        BottomMenuBarComponent
    ]
    
})

export class BottomMenuBarModule{

}