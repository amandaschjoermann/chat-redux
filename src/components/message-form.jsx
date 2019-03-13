import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createMessage } from '../actions';

class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};


  }


  handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  handleSubmit = (event) => {
    console.log(this.state.value);
    this.props.createMessage(
      this.props.selectedChannel,
      this.props.currentUser,
      this.state.value
    );
    this.setState({value: ""});
    event.preventDefault();
  }

  render() {
    return (
      <div>
      <form className="form" onSubmit={this.handleSubmit}>
        <input className="text" type="text" value={this.state.value} onChange={this.handleChange}/>

        <input className="button" type="submit" value="SEND" />
      </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { createMessage: createMessage },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
    selectedChannel: state.selectedChannel
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);
