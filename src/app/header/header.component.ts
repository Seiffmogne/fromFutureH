import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isClicked:boolean=true;

  constructor() { }

  ngOnInit(): void {
  }

  clicked(){
    this.isClicked=!this.isClicked;
  }

}
