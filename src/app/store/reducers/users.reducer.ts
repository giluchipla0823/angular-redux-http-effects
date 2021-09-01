import { Action, createReducer, on } from '@ngrx/store';
import { loadUsers, loadUsersError, loadUsersSuccess } from '../actions/index';
import { User } from '../../models/user.model';

export interface UsersState {
    users: User[];
    loaded: boolean;
    loading: boolean;
    error: any;
}

const initialState: UsersState = {
   users: [],
   loaded: false,
   loading: false,
   error: null,
}

const _usersReducer = createReducer(initialState,
    on(loadUsers, state => ({ ...state, loading: true})),
    on(loadUsersSuccess, (state, { users }) => ({
        ...state,
        loading: false,
        loaded: true,
        users: [...users]
    })),
    on(loadUsersError, (state, { payload }) => ({
        ...state,
        loading: false,
        loaded: false,
        error: {
            url: payload.url,
            name: payload.name,
            message: payload.message,
        }
    })),
);

export function usersReducer(state: any, action: Action) {
    return _usersReducer(state, action);
}