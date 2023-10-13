import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  // pour faire le transfert depuis parent a child
  // @Input() public nameFromParent: any;
  // pour faire le transfert depuis child vert parent
  @Output() public childEvent = new EventEmitter();
  public eventChild() {
    this.childEvent.emit('Message from child to parent');
  }
  constructor() {}

  ngOnInit(): void {}
}
