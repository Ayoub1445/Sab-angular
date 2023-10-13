import { Component, OnInit } from '@angular/core';
import { Observable, Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-observable-test',
  templateUrl: './observable-test.component.html',
  styleUrls: ['./observable-test.component.css'],
})
export class ObservableTestComponent implements OnInit {
  seconde: number | undefined;
  private counterSubscription: Subscription | undefined;

  constructor() {}
  ngOnInit(): void {
    const counter = interval(1000);
    this.counterSubscription = counter.subscribe((value: number) => {
      this.seconde = value;
    });
  }
  ngOnDestroy(): void {
    // Se désabonner de l'observable lors de la destruction du composant
    if (this.counterSubscription) {
      this.counterSubscription.unsubscribe();
    }
  }
}
