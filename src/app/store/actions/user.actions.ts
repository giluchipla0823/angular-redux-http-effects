import { createAction, props } from '@ngrx/store';
import { User } from '../../models/user.model';

export const loadUser = createAction(
    '[USER] loadUser',
    props<{id: string}>()
);

export const loadUserSuccess = createAction(
    '[USER] load User Success',
    props<{user: User}>()
);

export const loadUserError = createAction(
    '[USER] load User Error',
    props<{payload: any}>()
);