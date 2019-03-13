import React from 'react';
import MessageList from '../containers/message-list';
import ChannelList from '../containers/channel-list';


const App = () => {
  return (
    <div className="app">
      <ChannelList />

      <MessageList/>
    </div>
  );
};

export default App;
