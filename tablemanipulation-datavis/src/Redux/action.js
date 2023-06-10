import * as Types from "./actionType";
import axios from "axios";
export const getAllData = () => (dispatch) => {
  dispatch({ type: Types.GET_ALL_DATA_REQUEST });
  return axios
    .get("https://api.coinlore.net/api/tickers/")
    .then((res) => {
      dispatch({ type: Types.GET_ALL_DATA_SUCESS, payload: res.data });
      return Types.GET_ALL_DATA_SUCESS;
    })
    .catch((err) => {
      dispatch({ type: Types.GET_ALL_DATA_FAILURE });
    });
};

export const sortData = (payload) => (dispatch) => {
  dispatch({ type: Types.SORT_DATA,payload:payload});
};
