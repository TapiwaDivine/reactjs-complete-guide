import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

const app = props => {
  const [ personState, setPersonsState ] = useState({
    persons: [
      {name: 'Tapiwa', age: 36},
      {name: 'Manu', age: 29},
      {name: 'Steph', age: 26},
    ]
  });

  const [otherState, setOtherState] = useState('some pther value');

  console.log(personState, otherState)

  const switchNameHandler = () => {
    /// DONT DO THIS REACT WILL NOT REACOGNIZE IT : this.state.persons[1].name = 'Emmanuel';
    setPersonsState( {
      persons: [
        {name: 'Tapiwa', age: 36},
        {name: 'Emammuel', age: 29},
        {name: 'Stephenie', age: 26},
      ]
    //  otherState: personState.otherState
    })
  }

  return (
    <div className="App">
      <h1>Hi, i am a  React App</h1>
      <p>This is really working!!</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personState.persons[0].name} age={personState.persons[0].age} />
      <Person name={personState.persons[1].name} age={personState.persons[1].age} />
      <Person name={personState.persons[2].name} age={personState.persons[2].age} />
    </div>
    //React.createElement('div', {className: 'App'}, React.createElement('H1', null, 'Does this work now?'))
  );

}

export default app;