export const GET_RESULT_MSG = "GET_RESULT_MSG";
const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_RESULT_MSG:
      return action.result;
    default:
      return state;
  }
}
