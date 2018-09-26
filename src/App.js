import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Lily', age: 12},
      { name: 'Raz', age: 13},
      { name: 'Holly', age: 4}
    ],
    someOtherState: 'Some Value'
  }

  switchNameHandler = () => {
    //console.log('Was clicked');
    //Don't do this this.state.persons[0].name = 'Sweet Kitty';
    this.setState( {
      persons: [
        { name: 'Sweet Kitty', age: 12},
        { name: 'Raz', age: 13},
        { name: 'Holly', age: 5}
      ]
    } )
  }

  render() {
    return (
      <div className="App">
      <h1>Ihi, I'm a react app</h1>
      <button onClick={this.switchNameHandler}>Switch Name</button>
      <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
      <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>Hobbies: Eating</Person>
      <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
