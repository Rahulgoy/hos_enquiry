import {
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  SIGNUP_FAIL,
  SIGNUP_SUCCESS,
  LOGOUT,
} from "../actions/types";
import axios from "axios";
import { setAlert } from "./alerts";

export const login = (email, password) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post(
      "http://localhost:8000/api/token/",
      body,
      config
    );

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
      email: email,
    });

    dispatch(setAlert("Authenticated Successfully", "success"));
  } catch (err) {
    dispatch({
      type: LOGIN_FAIL,
    });
    dispatch(setAlert("Error Authenticating", "error"));
  }
};

export const signup = ({ name, email, password, password2 }) => async (
  dispatch
) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ name, email, password, password2 });

  try {
    const res = await axios.post(
      "http://localhost:8000/api/account/signup",
      body,
      config
    );

    dispatch({
      type: SIGNUP_SUCCESS,
      payload: res.data,
    });

    dispatch(setAlert("Account Created Successfully", "success"));
  } catch (err) {
    dispatch({
      type: SIGNUP_FAIL,
    });
    dispatch(setAlert("Error Creating Account", "error"));
  }
};

export const logout = () => (dispatch) => {
  dispatch(setAlert("Logout Successful", "success"));
  dispatch({ type: LOGOUT });
};
/// fetch that doctor matching with current logged in users email address
// then use that in navbar to link to it's profile page
