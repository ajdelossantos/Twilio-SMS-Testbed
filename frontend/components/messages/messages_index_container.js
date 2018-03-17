import { connect } from 'react-redux';
import { fetchMessages } from '../../actions/messages_actions';
import MessagesIndex from './messages_index';

const mapStateToProps = state => ({
    messages: Object.values(state.messages).reverse()
});

const mapDispatchToProps = dispatch => ({
  fetchMessages: () => dispatch(fetchMessages())
});

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(MessagesIndex);