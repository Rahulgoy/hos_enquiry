import axios from "axios";
import { FETCHED_FAIL, FETCHED_SUCCESS, SETKEYWORD_SUCCESS } from "./types";

export const fetch_filteredDoctors = (keyword) => async (dispatch) => {
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/doctor/profile/`
    );
    console.log(res.data);
    const special = res.data.filter((doctor) => {
      return Object.values(doctor)
        .join(" ")
        .toLowerCase()
        .includes(keyword.toLowerCase());
    });
    dispatch({
      type: FETCHED_SUCCESS,
      payload: special,
    });
  } catch (err) {
    dispatch({
      type: FETCHED_FAIL,
    });
  }
};

export const setKeyword_filteredDoctors = (keyword) => (dispatch) => {
  dispatch({
    type: SETKEYWORD_SUCCESS,
    payload: keyword,
  });
};
