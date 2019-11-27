import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';

//components
import TaskList from './components/TaskList'

// apollo client setup
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});

class App extends Component {
  render() {
    return (
        <ApolloProvider client={client}>
          <div id="main">
            <h1>The best ToDoList</h1>
            <TaskList />
           </div>
        </ApolloProvider>
    );
  }
}

export default App;
