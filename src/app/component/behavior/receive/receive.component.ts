import { Component, OnInit } from '@angular/core';
import { BehaviorService } from 'src/app/services/behavior.service';

@Component({
  selector: 'app-receive',
  templateUrl: './receive.component.html',
  styleUrls: ['./receive.component.css'],
})
export class ReceiveComponent implements OnInit {
  receiveName: string = '';

  constructor(private behaviroService: BehaviorService) {}
  ngOnInit(): void {
    this.behaviroService.getName().subscribe((resultName) => {
      console.log('result name form receive', resultName);
      this.receiveName = resultName;
    });
  }
}
