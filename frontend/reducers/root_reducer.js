import { combineReducers } from "redux";

import errorsReducer from "./errors_reducer";
import messagesReducer from "./messages_reducer";

const rootReducer = combineReducers({
  messages: messagesReducer,
  errors: errorsReducer
});

export default rootReducer;