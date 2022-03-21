import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  showlist: boolean = true;
  royalChallengers = [{
    name : "Ashutosh",
    location : "Pune"
  }, {
    name:"Sreeram",
    location:"Bangalore"
  },{
    name:"Ramu",
    location :"Bangalore"
  },{
    name:"Harinie",
    location:"Chennai"
  },{
    name:"Ganesh",
    location:"Bangalore"
  }];
  constructor() { }

  ngOnInit(): void {
  }

}
