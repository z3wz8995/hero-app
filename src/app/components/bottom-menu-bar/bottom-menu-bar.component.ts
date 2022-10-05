import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bottom-menu-bar',
  templateUrl: './bottom-menu-bar.component.html',
  styleUrls: ['./bottom-menu-bar.component.scss']
})
export class BottomMenuBarComponent implements OnDestroy {
  showMenu:boolean=false;
  lista:string[]=["Character","item","item","item","item","item","item","item","item","item"];
  showMenuLogin:boolean=false;
  colore:string='a';
  constructor(private router:Router) { }
  
  ngOnDestroy(): void {
    let body=window.document.getElementsByTagName("body");
    body[0].classList.remove("no-scroll");
  }
  toggleMenu(){
    this.showMenuLogin=false;
    this.showMenu=!this.showMenu;
    let body=window.document.getElementsByTagName("body");
    if(this.showMenu)body[0].classList.add("no-scroll");
    else
    body[0].classList.remove("no-scroll");
  }
  searchCharacter(){
    this.router.navigate(["/login/"]);
  }
  login(){
    this.showMenu=false;
    this.showMenuLogin=!this.showMenuLogin;
    let body=window.document.getElementsByTagName("body");
    if(this.showMenuLogin)body[0].classList.add("no-scroll");
    else
    body[0].classList.remove("no-scroll");
  }
}
