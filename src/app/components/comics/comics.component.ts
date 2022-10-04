import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.scss']
})
export class ComicsComponent implements OnInit {
  @Input() comics:any;
  constructor(private popup:MatDialog) {

   }
  popupShow(comic:any){
    this.popup.open(PopupComponent,{data:comic});
  }
  ngOnInit(): void {
  }

}
