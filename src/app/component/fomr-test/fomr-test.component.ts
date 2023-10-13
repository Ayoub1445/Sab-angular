import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginModel } from 'src/app/models/login';

@Component({
  selector: 'app-fomr-test',
  templateUrl: './fomr-test.component.html',
  styleUrls: ['./fomr-test.component.css'],
})
export class FomrTestComponent implements OnInit {
  public login: LoginModel;
  confirmPass: any;
  constructor() {
    this.login = new LoginModel();
  }

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    console.log(this.login);
  }
}
