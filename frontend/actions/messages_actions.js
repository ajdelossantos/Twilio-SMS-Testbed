import * as MessagesApiUtil from "../util/messages_api_util";
import { receiveErrors } from "./errors_actions";

export const RECEIVE_ALL_MESSAGES = "RECEIVE_ALL_MESSAGES";
export const RECEIVE_MESSAGE = "RECEIVE_MESSAGE";
export const REMOVE_MESSAGE = "REMOVE_MESSAGE";

export const fetchMessages = () => dispatch =>
  MessagesApiUtil.fetchMessages()
  .then(payload => dispatch(receiveAllMessages(payload)))
  .fail(errors => receiveErrors(errors.responseJSON));

export const fetchMessage = id => dispatch =>
  MessagesApiUtil.fetchMessage()
    .then(payload => dispatch(receiveMessage(payload)))
    .fail(errors => receiveErrors(errors.responseJSON));

export const deleteMessage = id => dispatch =>
  MessagesApiUtil.deleteMessage()
    .then(payload => dispatch(removeMessage(payload)))
    .fail(errors => receiveErrors(errors.responseJSON));

const receiveAllMessages = payload => ({
  type: RECEIVE_ALL_MESSAGES,
  payload
});

const receiveMessage = payload => ({
  type: RECEIVE_MESSAGE,
  payload
});

const removeMessage = payload => ({
  type: REMOVE_MESSAGE,
  payload
});