import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-second-compo',
  templateUrl: './second-compo.component.html',
  styleUrls: ['./second-compo.component.css'],
})
export class SecondCompoComponent implements OnInit {
  active = 'true';
  firstName = 'annan';
  dataList = [
    { name: 'ayoub', num: 1, country: 'Maroc' },
    { name: 'karim', num: 2, country: 'Medina' },
    { name: 'rahim', num: 3, country: 'makkah' },
  ];
  name = 'rahim';

  constructor(private route: Router) {}

  ngOnInit(): void {}

  goToFirstCompo() {
    this.route.navigate(['/First']);
  }
}
