import { NgModule } from "@angular/core";
import { GrillaComponent } from "./pages/grilla.component";
import { RouterModule } from '@angular/router';
import { GrillaRouterModule } from "./grilla.router.module";
import { GrillaLayout } from './grilla.layout';

@NgModule({
    declarations:[
        GrillaComponent,
        GrillaLayout
    ],
    imports:[
        RouterModule,
        GrillaRouterModule

    ]
})

export class GrillaModule{}