import * as MessagesApiUtil from "../util/messages_api_util";
import { fetchMessages, fetchMessage, deleteMessage } from "../actions/messages_actions";

const debugScript = (store, bool) => {
  if (bool) {
    window.fetchMessagesApi = MessagesApiUtil.fetchMessages;
    window.fetchMessageApi = MessagesApiUtil.fetchMessage;
    window.deleteMessageApi = MessagesApiUtil.deleteMessage;

    window.fetchMessages = fetchMessages;
    window.fetchMessage = fetchMessage;
    window.deleteMessage = deleteMessage;

    window.getState = store.getState;
    window.dispatch = store.dispatch;
  }
};

export default debugScript;