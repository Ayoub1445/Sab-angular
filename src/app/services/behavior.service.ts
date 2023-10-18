import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
// import {  } from 'rxjs-compat';

@Injectable({
  providedIn: 'root',
})
export class BehaviorService {
  mySendName = new BehaviorSubject<string>('');

  constructor() {}

  setName(name: string) {
    console.log('name from service', name);
    return this.mySendName.next(name);
  }

  getName(): Observable<string> {
    return this.mySendName.asObservable();
  }
  // getName() {}
}
