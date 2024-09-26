import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  @ViewChild(MatMenuTrigger) menuTrigger!: MatMenuTrigger;
    isHidden = false;
  constructor(){}

  showMenOptions = false;
  showWomenOptions = false;
  showKidsOptions = false;

  showProfileMenu = false;
  showCartMenu = false;

  ngOnInit(): void {
    
  }

  openMenu() {
    this.menuTrigger.openMenu();
  }

  closeMenu() {
    this.menuTrigger.closeMenu();
  }

  

}
