import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  // pour faire le transfert depuis parent a child
  // public name = 'ayoub annan';
  // pour faire le transfert depuis child vert parent
  public message = '';

  constructor() {}

  ngOnInit(): void {}
}
