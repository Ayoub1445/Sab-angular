import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BehaviorService } from 'src/app/services/behavior.service';

@Component({
  selector: 'app-send',
  templateUrl: './send.component.html',
  styleUrls: ['./send.component.css'],
})
export class SendComponent implements OnInit {
  yourName: string = '';

  constructor(private behaviorService: BehaviorService) {}

  ngOnInit(): void {}

  sendName(form: NgForm) {
    console.log('Name', this.yourName);
    this.behaviorService.setName(this.yourName);
  }
}
