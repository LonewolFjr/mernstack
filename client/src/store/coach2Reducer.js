import { GET_COACH_VIEW2 } from "./actions";
const initialState = {
    coachlist:[]
  };


  export default function(state = initialState, action) {
    switch (action.type) {
      case GET_COACH_VIEW2:
        return {
          ...state,
          coachlist : action.payload
        };
      default:
        return state;
    }
  }