import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setMessages } from '../actions';
import Message from '../components/message';
import MessageForm from '../components/message-form';

class MessageList extends Component {

  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  scrollToBottom() {
    this.el.scrollIntoView();
  }

  focusTextInput = () => {
    this.textInput.current.focus();
  }


  componentWillMount() {
    return setInterval(() => {
      this.props.setMessages(this.props.selectedChannel)
    }, 500);
  }

  render() {

    return(

      <div className="message-list">
       <h4 className="header-top">Channel #{this.props.selectedChannel}</h4>
        <div className="messages">
          {this.props.messages.map((message) => {
            return <Message message={message} key={message.created_at}/>
          })}
        </div>
          <MessageForm />
          <div ref={el => { this.el = el; }}></div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {setMessages: setMessages },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    messages: state.messages,
    selectedChannel: state.selectedChannel
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
