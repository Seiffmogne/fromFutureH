import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  contentOfList:any;
  isPhoneSize:boolean=false;
  isClicked:boolean=false;

  constructor() { }

  ngOnInit(): void {
    this.contentOfList=['Femmes','Hommes','Accessoires'];
    if(screen.width<=580){
      this.isPhoneSize=true;
    }
  }

  openASideNAv(){
    this.isClicked=!this.isClicked;

  }

}
