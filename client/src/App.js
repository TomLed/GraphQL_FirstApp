import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';

//components
import TaskList from './components/TaskList'
import AddTask from "./components/AddTask";

// apollo client setup
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});

class App extends Component {
  render() {
    return (
        <ApolloProvider client={client}>
          <div id="main">
            <h1>The Ultimate ToDoList</h1>
            <TaskList />
            <AddTask />
           </div>
        </ApolloProvider>
    );
  }
}

export default App;
