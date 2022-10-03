import { NgModule } from "@angular/core";
import { GrillaComponent } from "./grilla.component";
import { RouterModule, Routes } from '@angular/router';
import { TopMenuBarModule } from "src/app/components/top-menu-bar/top-menu-bar.module";
import { PaginadorGrillaModule } from '../../components/paginador-grilla/paginador-grilla.module';


const routes:Routes=[{
    path:"",
    component:GrillaComponent
}]
@NgModule({
    declarations:[
        GrillaComponent
    ],
    imports:[
        RouterModule.forChild(routes),
        TopMenuBarModule,
        PaginadorGrillaModule
    ]
})

export class GrillaModule{}