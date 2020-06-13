
import { GET_ERRORS, SET_CURRENT_USER, USER_LOADING, GET_COACH_VIEW2 ,GET_SUCCESS} from "../../store/actions";
import axios from "axios";
export const get_coach_view2 = () => {
  return {
    type: GET_COACH_VIEW2
  }
}
export const get_coach_view2_axios = () => dispatch => {
  axios
    .post("/api/coach/viewcoach")
    .then(res => dispatch({
      type: GET_COACH_VIEW2,
      payload: res.data
    }))

}
export const registerCoach = (userData, history) => dispatch => {

  axios
    .post("/api/coach/coachregister", userData)
    .then(res => history.push("/login"))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const deleteCoach = (delId, history) => dispatch => {
  const success = { success: "success" }
  axios
    .post("/api/coach/deletecoach", delId)
    .then(response => {
      return ({
        type: GET_SUCCESS,
        payload: response.data
      });
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};