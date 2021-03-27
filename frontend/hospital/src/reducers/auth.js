import {
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  SIGNUP_FAIL,
  SIGNUP_SUCCESS,
  LOGOUT,
} from "../actions/types";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  loading: false,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_SUCCESS:
      localStorage.setItem("token", payload.access); //assign value from payload-access token to token in local storage
      return {
        ...(state, []),
        token: payload.access,
        isAuthenticated: true,
        loading: false,
      };
    case SIGNUP_SUCCESS:
      return {
        ...(state, []),
        isAuthenticated: false,
        loading: false,
      };
    case SIGNUP_FAIL:
    case LOGIN_FAIL:
    case LOGOUT:
      localStorage.removeItem("token");
      return {
        ...(state, []),
        isAuthenticated: false,
        token: null,
        loading: false,
      };
    default:
      return state;
  }
}
