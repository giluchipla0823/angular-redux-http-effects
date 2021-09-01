import { createAction, props } from '@ngrx/store';
import { User } from '../../models/user.model';

export const loadUsers = createAction('[Users] load Users');
export const loadUsersSuccess = createAction(
    '[Users] load Users success',
    props<{users: User[]}>()
);
export const loadUsersError = createAction(
    '[Users] load Users error',
    props<{payload: any}>()
);