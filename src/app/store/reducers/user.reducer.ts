import { Action, createReducer, on } from '@ngrx/store';
import { loadUser, loadUserError, loadUserSuccess } from '../actions/index';
import { User } from '../../models/user.model';

export interface UserState {
    id: string | null;
    user: User | null;
    loaded: boolean;
    loading: boolean;
    error: any;
}

const initialState: UserState = {
   id: null, 
   user: null,
   loaded: false,
   loading: false,
   error: null,
}

const _userReducer = createReducer(initialState,
    on(loadUser, (state, { id }) => ({
        ...state,
        loading: true,
        id
    })),
    on(loadUserSuccess, (state, { user }) => ({
        ...state,
        loading: false,
        loaded: true,
        user
    })),
    on(loadUserError, (state, { payload }) => ({
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

export function userReducer(state: any, action: Action) {
    return _userReducer(state, action);
}