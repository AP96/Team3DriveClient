import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public hcText: string;

  constructor() { }

  ngOnInit(): void {
    this.hcText = "WELCOME TO FILE-MANAGEMENT APPLICATION"
  }

}
