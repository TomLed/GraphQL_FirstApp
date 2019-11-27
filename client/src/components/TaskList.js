import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import {getTasksQuery} from "../queries/queries";

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
