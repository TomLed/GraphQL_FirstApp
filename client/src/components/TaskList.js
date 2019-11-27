import React, { Component } from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

const getTasksQuery = gql`
    {
        tasks {
            name
            id
        }
    }
`;

class TaskList extends Component {
    displayTasks(){
        var data = this.props.data;
        if(data.loading){
            return(<div>Loading tasks...</div>);
        }else{
            return data.tasks.map(task => {
                return (
                    <li key={task.id}>{task.name}</li>
                );
            })
        }
    }
    render() {
        return (
            <div>
              <ul id="task-list">
                  {this.displayTasks()}
              </ul>
            </div>
        );
    }
}

export default graphql(getTasksQuery)(TaskList);
