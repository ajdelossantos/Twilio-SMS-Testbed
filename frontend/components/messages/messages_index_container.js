import { connect } from 'react-redux';
import { fetchMessages } from '../../actions/messages_actions';
import { selectAllMessages } from '../../reducers/selectors';
import MessagesIndex from './messages_index';

const mapStateToProps = state => ({
  messages: selectAllMessages(state)
});

const mapDispatchToProps = dispatch => ({
  fetchMessages: () => dispatch(fetchMessages())
});

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(MessagesIndex);