import { Component } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent {
  people: any = [];
  peopleToShow: any = [];
  searchedName = '';

  constructor(private usersService: UsersService) { 

  }

  ngOnInit()
  {
    this.usersService.getUserData()
    .subscribe((response: any) =>{
      this.people = response.data;
      this.peopleToShow = response.data;
    })
  }

  searchByName() {
    this.peopleToShow = this.people.filter(user => user.firstName === this.searchedName);
    console.log(this.people);
  }
}
