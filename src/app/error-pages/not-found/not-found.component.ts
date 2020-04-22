import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  public notFound: string = `Error 404 ! Can't Find Requested Content`

  constructor() { }

  ngOnInit(): void {
  }

}
