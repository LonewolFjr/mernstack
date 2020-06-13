
import { LOAD_BRANCHES,GET_ERRORS, SET_CURRENT_USER, USER_LOADING,GET_COACH_VIEW2, GET_SUCCESS , LOAD_BATCHES } from "../../store/actions";
import axios from "axios";

export const get_branches = () => dispatch =>{
  axios
  .post("/api/branch/viewbranch")
  .then(res=>dispatch({
      type : LOAD_BRANCHES,
      payload :res.data
  }))

}

export const get_batches = () => dispatch =>{
  axios
  .post("/api/branch/viewbatch")
  .then(res=>dispatch({
      type : LOAD_BATCHES,
      payload :res.data
  }))

}
export const registerBranch = (userData, history) => dispatch => {
  const success = { success : "success"}
  axios
    .post("/api/branch/createbranch", userData)
    .then(response => {
      return ({
        type    : GET_SUCCESS,
        payload : response.data
      });
    } )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      }) 
    );
};
export const deleteBranch = (delId, history) => dispatch => {
  const success = { success: "success" }
  axios
    .post("/api/branch/deletebranch", delId)
    .then(/* response => {
      return ({
        type: GET_SUCCESS,
        payload: response.data
      });
    } */)
    .catch(err => console.log(err)
    
      /* dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      }) */
    );
};
