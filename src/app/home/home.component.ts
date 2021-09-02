import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  topics = ['Angular', 'React', 'Vue'];

  userModel = new User('Rob', 'rob@test.com', 5556665566, '', true);

  onSubmit() {
    console.log(this.userModel);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
