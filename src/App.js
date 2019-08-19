import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import UserOutPut from './Users/UserOutput';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 23, id: 0 },
      { name: 'John', age: 33, id: 1 },
      { name: 'Mary', age: 56, id: 2 }
    ],
    username: 'Jesse',
    showPersons: false
  };

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons;
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: event.target.value, age: 23 },
        { name: event.target.value, age: 33 },
        { name: event.target.value, age: 22 }
      ]
    })
  }

  // changeUserNameHandler = (event) => {
  //   this.setState({
  //     username: event.target.value
  //   })
  // }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow })
  }

  render() {
    const style = {
      backGroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }


    let persons;

    if (this.state.showPersons) {
      persons = this.state.persons.map((person, index) => {
        return (<div>
          <Person
            changed={this.nameChangedHandler.bind(this, person.id)}
            click={() => this.deletePersonHandler(index)}
            name={person.name}
            age={person.age}
            id={person.id}
          />
        </div>)
      }, [])
    }


    return (
      <div className="App">
        <h1>Im a React App!</h1>
        <button style={style}
          onClick={this.togglePersonsHandler}> Toggle Persons </button>
        {persons}
        <br />
        <div>

          <UserOutPut username={this.state.username} newUserName={this.changeUserNameHandler} />

        </div>

      </div>
    );
  }
}

export default App;
