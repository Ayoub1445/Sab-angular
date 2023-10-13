import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css'],
})
export class PipeComponent implements OnInit {
  public firstName = 'ayoub';
  public title = 'How to learn pipes';

  public student = {
    FullName: 'ayoub annan',
    school: 'Makkah',
  };

  public myDate = new Date();

  constructor() {}
  ngOnInit(): void {}
}
