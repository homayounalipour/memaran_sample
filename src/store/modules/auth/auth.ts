import { useAppDispatch, useAppSelector } from "../../../hooks/useStore";
import { useCallback } from "react";
import { removeToken } from "../token/token";

export const USER_LOGGED_IN = "USER_LOGGED_IN";
export const userLoggedIn = (loggedIn: boolean) => ({
  type: USER_LOGGED_IN,
  loggedIn,
});

export const CLEAR_AUTH_STATE = "CLEAR_AUTH_STATE";
export const clearAuthState = () => ({
  type: CLEAR_AUTH_STATE,
});

export type AuthState = {
  loggedIn: boolean;
};

export const initialAuthState: AuthState = {
  loggedIn: false,
};

export type AuthAction = {
  type: string;
  loggedIn: boolean;
};

export const authReducer = (
  state: AuthState = initialAuthState,
  action: AuthAction
) => {
  switch (action.type) {
    case USER_LOGGED_IN: {
      return {
        loggedIn: action.loggedIn,
      };
    }

    case CLEAR_AUTH_STATE: {
      return {
        loggedIn: false,
        loggedInBy: null,
      };
    }
    default: {
      return state;
    }
  }
};

export function useAuth() {
  const authState = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const dispatchUserLoggedIn = useCallback(
    (loggedIn: boolean, password: boolean) => {
      dispatch(userLoggedIn(loggedIn));
    },
    [dispatch]
  );

  const dispatchClearAuthState = useCallback(() => {
    dispatch(clearAuthState());
    dispatch(removeToken());
  }, [dispatch]);

  return {
    ...authState,
    dispatchUserLoggedIn,
    dispatchClearAuthState,
  };
}
