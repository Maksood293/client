import Axios from "axios";
import { ADD_ADDRESS_FAILED, ADD_ADDRESS_REQUEST, ADD_ADDRESS_SUCCESS, GET_ADDRESS_BOOK_LIST_FAILED, GET_ADDRESS_BOOK_LIST_REQUEST, GET_ADDRESS_BOOK_LIST_SUCCESS } from "../constants/addressBookConstant";

export const getTodoAction = () => async (dispatch) => {
    dispatch({ type: GET_ADDRESS_BOOK_LIST_REQUEST });
    try {
      const { data } = await Axios.get("address/addresslist");
      dispatch({ type: GET_ADDRESS_BOOK_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: GET_ADDRESS_BOOK_LIST_FAILED,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

  export const addAddressAction = (payload) => async (dispatch) => {
    console.log(payload,"payload")
    dispatch({ type: ADD_ADDRESS_REQUEST });
    try {
      const { data } = await Axios.post("address/add", payload);
      dispatch({ type: ADD_ADDRESS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: ADD_ADDRESS_FAILED,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };