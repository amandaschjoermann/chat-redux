import CREATE_MESSAGE from '../actions';

const createMessageReducer = (state = null, action) => {
  switch(action.type) {
    case "CREATE_MESSAGE":
      return action.payload;
    default:
      return state;
  }
}

export default createMessageReducer;
