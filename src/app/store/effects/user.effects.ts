import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap } from "rxjs/operators";
import * as userActions from "../actions/user.actions";
import { UserService } from '../../services/user.service';
import { of } from "rxjs";

@Injectable()
export class UserEffects {
    constructor(
        private actions$: Actions,
        private userService: UserService
    ) {}

    loadUser$ = createEffect(
        () => this.actions$.pipe(
            ofType(userActions.loadUser),
            mergeMap(
                (action) => this.userService.getUserById(action.id).pipe(
                    map(user => userActions.loadUserSuccess({user})),
                    catchError(err => of(userActions.loadUserError({payload: err})))
                )
            )
        )
    );
}