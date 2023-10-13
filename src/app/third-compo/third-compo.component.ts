import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third-compo',
  templateUrl: './third-compo.component.html',
  styleUrls: ['./third-compo.component.css'],
})
export class ThirdCompoComponent implements OnInit {
  maroc = false;
  france = false;
  italy = true;

  constructor() {}
  changeContry() {
    this.maroc = true;
    this.france = false;
    this.italy = false;
  }

  ngOnInit(): void {}
}
