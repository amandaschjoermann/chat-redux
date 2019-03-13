import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectChannel } from '../actions';

class ChannelList extends Component {

  render() {

    return(
        <div className="channel-list">
          <h2>Redux Chat</h2>
          <img className="logo" src="https://course_report_production.s3.amazonaws.com/rich/rich_files/rich_files/4791/s300/logo-big.png" alt=""/>
          {this.props.channels.map((channel) => {
              let classes = "";
              if(channel === this.props.selectedChannel) {
                classes += "selected";
              }
              return <h3 key={channel} className={classes} onClick={() => this.props.selectChannel(channel)}>
                #{channel}
              </h3>
          })}
        </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {selectChannel: selectChannel },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    channels: state.channels,
    selectedChannel: state.selectedChannel
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);
