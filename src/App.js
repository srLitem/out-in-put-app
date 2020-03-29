import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {

  state = {
    username: "Sayfyx",
  };

  changeUsername = (newUsername) => {
    this.setState( {username : newUsername.target.value} );
  }

  render(){
    return (
      <div className="App">
        <UserInput 
          change={this.changeUsername}
          username={this.state.username}
        />
        <UserOutput
          change={this.changeUsername}
          username={this.state.username}
        />
        <UserOutput
          change={this.changeUsername}
          username={this.state.username}
        />
        <UserOutput
          change={this.changeUsername}
          username={this.state.username}
        />
      </div>
    );
  };
  
}

export default App;
