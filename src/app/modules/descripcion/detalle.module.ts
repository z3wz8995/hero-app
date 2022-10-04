import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { InfoModule } from "src/app/components/info/info.module";
import { BottomMenuBarModule } from '../../components/bottom-menu-bar/bottom-menu-bar.module';
import { DetalleComponent } from "./detalle.component";
import { ComicsModule } from '../../components/comics/comics.module';
import { StoriesModule } from "src/app/components/stories/stories.module";
import { EventsModule } from "src/app/components/events/events.module";


const routes:Routes=[{
    path:"",
    component:DetalleComponent
}]
@NgModule({
    declarations:[
        DetalleComponent
    ],
    imports:[
        RouterModule.forChild(routes),
        BottomMenuBarModule,
        InfoModule,
        StoriesModule,
        EventsModule,
        ComicsModule,
        CommonModule
    ]    
})

export class DetalleModule{}