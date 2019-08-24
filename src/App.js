import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import UserOutPut from './Users/UserOutput';
import Validate from './Users/validation';
import CharComp from "./Users/charComponent";



class App extends Component {
  state = {
    persons: [
      { id: 'wpeom3p2', name: 'Max', age: 23 },
      { id: 'oasnal2654', name: 'John', age: 33 },
      { id: '235lkvsll', name: 'Mary', age: 56 }
    ],
    username: 'Jesse',
    showPersons: false
  };

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  deleteLetterHandler = (index) => {
    const text = this.state.username.split('');
    text.splice(index, 1);
    const updatedText = text.join('');
    this.setState({ username: updatedText });

  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    });

    const person = { ...this.state.persons[personIndex] };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons })
  }

  changeUserNameHandler = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow })
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }


    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              changed={(event) => this.nameChangedHandler(event, person.id)}
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
            />
          })}
        </div>
      );


    }


    let letter = this.state.username.split('');

    let chars = null;

    if (letter.length >= 5) {
      chars =
        <div>
          {letter.map((letter) => {
            return <CharComp letter={letter} clicked={() => { this.deleteLetterHandler(letter) }} key={`${letter.charCodeAt() * Math.random()}`} />
          })}
        </div>

    }





    return (

      <div className="App">
        <h1>Im a React App!</h1>
        <p >This is really working!</p>
        <button style={style}
          onClick={this.togglePersonsHandler}> Toggle Persons </button>
        {persons}
        <br />
        <div>

          <UserOutPut username={this.state.username} newUserName={this.changeUserNameHandler} />
          <Validate length={this.state.username.length} />
          {chars}
        </div>

      </div>



    );
  }
}

export default App;
