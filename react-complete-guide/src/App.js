import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  
  state = {
    persons: [
      {name: 'Tapiwa', age: 36},
      {name: 'Manu', age: 29},
      {name: 'Steph', age: 26},
    ],
    otherState: 'Some other value'
  };

  switchNameHandler = () => {
    /// DONT DO THIS REACT WILL NOT REACOGNIZE IT : this.state.persons[1].name = 'Emmanuel';
    this.setState( {
      persons: [
        {name: 'Tapiwa', age: 36},
        {name: 'Emammuel', age: 29},
        {name: 'Stephenie', age: 26},
      ]
    })
  }
  
  render() {
    return (
      <div className="App">
        <h1>Hi, i am a  React App</h1>
        <p>This is really working!!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
      //React.createElement('div', {className: 'App'}, React.createElement('H1', null, 'Does this work now?'))
    );
  }
}

export default App;
  


