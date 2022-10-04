import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-bottom-menu-bar',
  templateUrl: './bottom-menu-bar.component.html',
  styleUrls: ['./bottom-menu-bar.component.scss']
})
export class BottomMenuBarComponent implements OnDestroy {
  showMenu:boolean=false;
  constructor() { }
  
  ngOnDestroy(): void {
    let body=window.document.getElementsByTagName("body");
    body[0].classList.remove("no-scroll");
  }
  toggleMenu(){
    this.showMenu=!this.showMenu;
    let body=window.document.getElementsByTagName("body");
    if(this.showMenu)body[0].classList.add("no-scroll");
    else
    body[0].classList.remove("no-scroll");
    
  }
}
