import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatDialogModule } from "@angular/material/dialog";
import { EventsComponent } from "./events.component";


@NgModule({
    declarations:[
        EventsComponent
    ],
    imports:[
        CommonModule,
        MatDialogModule
    ],
    exports:[
        EventsComponent
    ]
    
})

export class EventsModule{

}