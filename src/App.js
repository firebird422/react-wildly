import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>Ihi, I'm a react app</h1>
      <Person name="Lily" age="12"/>
      <Person name="Raz" age="13">Hobbies: Eating</Person>
      <Person name="Holly" age="4"/>
      </div>
    );
  }
}

export default App;
