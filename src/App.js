import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
class App extends Component {
    state = {
      persons: [
          {name: 'Max', age: 23},
          {name: 'John', age: 33},
          {name: 'Mary', age: 56}
      ]
    };

    switchNameHandler = () => {
      this.setState({persons: [
              {name: 'Not Max', age: 23},
              {name: 'John', age: 33},
              {name: 'Stephanie', age: 22}
          ]})

    };
  render() {
    return (
      <div className="App">
     <h1>Im a React App!</h1>
          <button onClick={this.switchNameHandler}> Switch Name</button>
          <Person name={this.state.persons[0].name} age={this.state.persons[0].age}> Hobbies: Crucifixion</Person>
          <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
          <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
