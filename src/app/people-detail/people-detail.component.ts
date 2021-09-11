import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserModel } from '../models/user.model';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-people-detail',
  templateUrl: './people-detail.component.html',
  styleUrls: ['./people-detail.component.css']
})
export class PeopleDetailComponent implements OnInit {
  user: UserModel;

  constructor(private router: ActivatedRoute, private usersService: UsersService) { }

  ngOnInit() {
    this.fetchUser();
  }

  fetchUser() {
    this.usersService.getUser(this.router.snapshot.params.id)
      .subscribe((user: any) =>{
        this.user = user;
        console.log(this.user);
      });
  }

}
