import { LOAD_BRANCHES, USER_LOADING, GET_SUCCESS,LOAD_BATCHES } from "./actions";

const isEmpty = require("is-empty");
const initialState = {
  branchlist: [],
  success: "Data saved !",
  batchlist: []
};
export default function (state = initialState, action) {
  switch (action.type) {
    case LOAD_BRANCHES:
      return {
        ...state,
        branchlist: action.payload,

      };
    case LOAD_BATCHES:
      return {
        ...state,
        batchlist: action.payload,

      };
    case GET_SUCCESS:
      return {
        ...state,
        success: "ARE WE SUCCESSFUL ?",

      };
    default:
      return state;
  }
}
