import React, { Component } from 'react';

//components
import TaskList from './components/TaskList'

class App extends Component {
  render() {
    return (
      <div id="main">
        <h1>The best ToDoList</h1>
          <TaskList />
      </div>
    );
  }
}

export default App;
