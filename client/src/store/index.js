import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import coach2Reducer from "./coach2Reducer";
import branchReducer from "./branchReducer";
import reducer from "./reducer";


const rootReducer = combineReducers({
  
  reducer :reducer,
  auth: authReducer,
  errors: errorReducer,
  coach2 : coach2Reducer,
  branch : branchReducer,
});

export default rootReducer;