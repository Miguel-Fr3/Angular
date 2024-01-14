import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngIf-ngfor',
  templateUrl: './ngIf-ngfor.component.html',
  styleUrls: ['./ngIf-ngfor.component.css']
})
export class NgIfNgforComponent implements OnInit {

  users = [1 , 2 , 3 , 4, 5 ,6, 7, 8, 9, 10]

  constructor() { }

  ngOnInit() {
  }

}
