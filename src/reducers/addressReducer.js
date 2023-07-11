import { ADD_ADDRESS_FAILED, ADD_ADDRESS_REQUEST, ADD_ADDRESS_SUCCESS, GET_ADDRESS_BOOK_LIST_FAILED, GET_ADDRESS_BOOK_LIST_REQUEST, GET_ADDRESS_BOOK_LIST_SUCCESS } from "../constants/addressBookConstant";

export const getAddressReducer = (state = { loading: true }, action) => {
    switch (action.type) {
      case GET_ADDRESS_BOOK_LIST_REQUEST:
        return { loading: true };
      case GET_ADDRESS_BOOK_LIST_SUCCESS:
        return { loading: false, success: true, address: action.payload };
      case GET_ADDRESS_BOOK_LIST_FAILED:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };

  export const addAddressReducer = (state = { loading: true }, action) => {
    switch (action.type) {
      case ADD_ADDRESS_REQUEST:
        return { loading: true };
      case ADD_ADDRESS_SUCCESS:
        return { loading: false, success: true };
      case ADD_ADDRESS_FAILED:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };