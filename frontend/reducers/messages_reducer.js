import {
  RECEIVE_ALL_MESSAGES,
  RECEIVE_MESSAGE,
  REMOVE_MESSAGE
} from "../actions/messages_actions";
import merge from "lodash/merge";

const _nullState = Object.freeze({});

const messagesReducer = (state = _nullState, action) => {
  Object.freeze(state);
  let newState;

  switch (action.type) {
    case RECEIVE_ALL_MESSAGES:
      newState = merge({}, state, action.payload.messages);
      return newState;
    
    case RECEIVE_MESSAGE:
      newState = merge({}, state);
      newState[action.payload.message.id] = action.payload.message;
      return newState;
    
    case REMOVE_MESSAGE:
      newState = merge({}, state);
      delete newState[action.payload.message.id];
      return newState;
    
    default:
      return state;
  }
};

export default messagesReducer;