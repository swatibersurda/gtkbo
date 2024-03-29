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
  dispatch({ type: Types.SORT_DATA, payload: payload });
};

export const filterData = (dataToFilter) => (dispatch) => {
  dispatch({ type: Types.FILTER_DATA, payload: dataToFilter });
};

export const paginatedData = (page) => (dispatch) => {
  dispatch({ type: Types.PAGINATED_DATA, payload: page });
};
export const filterDataOther = (dataToFilter) => (dispatch) => {
  dispatch({ type: Types.FILTER_DATA_OTHER, payload: dataToFilter });
};

export const filterAndPagination=(page)=>(dispatch)=>{
   dispatch({type:Types.FILTER_AND_PAGINATION,payload:page})
}


