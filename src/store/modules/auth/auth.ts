import { LoggedInBy } from "../../../types/auth";
import { useAppDispatch, useAppSelector } from "../../../hooks/useStore";
import { useCallback } from "react";
import { removeToken } from "../token/token";

export const USER_LOGGED_IN = "USER_LOGGED_IN";
export const userLoggedIn = (
  loggedIn: boolean,
  loggedInBy?: LoggedInBy | null
) => ({
  type: USER_LOGGED_IN,
  loggedIn,
  loggedInBy,
});

export const SET_LOGGED_IN_BY = "SET_LOGGED_IN_BY";
export const setLoggedInBy = (loggedInBy: LoggedInBy | null) => ({
  type: SET_LOGGED_IN_BY,
  loggedInBy,
});

export const CLEAR_LOGGED_IN_BY = "CLEAR_LOGGED_IN_BY";
export const clearLoggedInBy = () => ({
  type: CLEAR_LOGGED_IN_BY,
});

export const CLEAR_AUTH_STATE = "CLEAR_AUTH_STATE";
export const clearAuthState = () => ({
  type: CLEAR_AUTH_STATE,
});

export type AuthState = {
  loggedIn: boolean;
  loggedInBy: LoggedInBy | null;
};

export const initialAuthState: AuthState = {
  loggedIn: false,
  loggedInBy: null,
};

export type AuthAction = {
  type: string;
  loggedIn: boolean;
  loggedInBy: LoggedInBy | null;
};

export const authReducer = (
  state: AuthState = initialAuthState,
  action: AuthAction
) => {
  switch (action.type) {
    case USER_LOGGED_IN: {
      return {
        loggedIn: action.loggedIn,
        loggedInBy: action.loggedIn ? state.loggedInBy : null,
      };
    }
    case SET_LOGGED_IN_BY: {
      return {
        ...state,
        loggedInBy: action.loggedInBy,
      };
    }
    case CLEAR_LOGGED_IN_BY: {
      return {
        ...state,
        loggedInBy: null,
      };
    }
    case CLEAR_AUTH_STATE: {
      return {
        rememberMe: false,
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
    (loggedIn: boolean, password: boolean, loggedInBy?: LoggedInBy | null) => {
      dispatch(userLoggedIn(loggedIn, loggedInBy));
    },
    [dispatch]
  );

  const dispatchLoggedInBy = useCallback(
    (loggedInBy: LoggedInBy | null) => {
      dispatch(setLoggedInBy(loggedInBy));
    },
    [dispatch]
  );

  const dispatchClearLoggedInBy = useCallback(() => {
    dispatch(clearLoggedInBy());
  }, [dispatch]);

  const dispatchClearAuthState = useCallback(() => {
    dispatch(clearAuthState());
    dispatch(removeToken());
  }, [dispatch]);

  return {
    ...authState,
    dispatchUserLoggedIn,
    dispatchLoggedInBy,
    dispatchClearLoggedInBy,
    dispatchClearAuthState,
  };
}
