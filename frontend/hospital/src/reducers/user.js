import {
  FETCHED_FAIL,
  FETCHED_SUCCESS,
  SETKEYWORD_SUCCESS,
} from "../actions/types";

const initialState = {
  isfetched: null,
  doctor: "",
  searchKey: "",
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case FETCHED_SUCCESS:
      return {
        ...state,
        isfetched: true,
        doctor: payload,
      };
    case FETCHED_FAIL:
      return {
        ...state,
        isfetched: false,
      };
    case SETKEYWORD_SUCCESS:
      localStorage.setItem("ImageKey", payload);
      return {
        ...state,
        searchKey: payload,
      };
    default:
      return state;
  }
}
