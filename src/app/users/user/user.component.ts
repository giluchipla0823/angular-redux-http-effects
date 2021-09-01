import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducers';
import { loadUser } from '../../store/actions/user.actions';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user: User | undefined;

  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.store.select('user').subscribe(({user}) => {
      this.user = user as User;
    });
    this.route.params.subscribe(({id}) => {
      this.store.dispatch(loadUser({id}))
    });
  }

}
