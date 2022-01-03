import React, { Component } from 'react';

class App extends Component {
  render() {
    const isLoggedIn = typeof window.ethereum !== 'undefined';
    return (
      <div>
        <div>
          {
            isLoggedIn
              ? (<div>맞아요!</div>)
              : (<div>틀려요!</div>)
          }
        </div>
      </div>
    );
  }
}



export default App;
