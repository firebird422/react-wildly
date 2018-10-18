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
    someOtherState: 'Some Value',
    showPersons: 'false'
  }

  switchNameHandler = (newName) => {
    //console.log('Was clicked');
    //Don't do this this.state.persons[0].name = 'Sweet Kitty';
    this.setState( {
      persons: [
        { name: 'Sweet Kitty', age: 12},
        { name: newName, age: 13},
        { name: 'Holly', age: 5}
      ]
    } )
  }

  nameChangedHandler = (event) => {
    this.setState( {
      persons: [
        { name: 'Sweet Kitty', age: 12},
        { name: event.target.value, age: 13},
        { name: 'Holly', age: 5}
      ]
    } )
  }

  togglePersonsHandler = () => {
      const doesShow = this.state.showPersons;
      this.setState({showPersons: !doesShow});
  }

  render () {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Ihi, I'm a react app</h1>
        <button 
          style={style}
          onClick={this.togglePersonsHandler.bind()}>Toggle Persons</button>
        { 
          this.state.showPersons ? 
          <div>
            <Person 
              name={this.state.persons[0].name} 
              age={this.state.persons[0].age}/>
            <Person 
              name={this.state.persons[1].name} 
              age={this.state.persons[1].age}
              click={this.switchNameHandler.bind(this, 'Ogre')}
              changed={this.nameChangedHandler}>
              Hobbies: Eating</Person>
            <Person 
              name={this.state.persons[2].name} 
              age={this.state.persons[2].age}/> 
          </div> : null
        }  

      </div>
    );
  }
}

export default App;
