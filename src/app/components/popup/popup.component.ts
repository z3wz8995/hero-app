import { Component, Inject, InjectionToken, OnInit } from '@angular/core';
import {  MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {

  constructor(private popup:MatDialogRef<PopupComponent>, @Inject(MAT_DIALOG_DATA)public comic:any) { 

  }

  ngOnInit(): void {
  }
  close(){
    this.popup.close();
  }
}


