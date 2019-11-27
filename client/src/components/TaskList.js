import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getTasksQuery } from '../queries/queries';

// components
import TaskDetails from './TaskDetails';

class TaskList extends Component {
    constructor(props){
        super(props);
        this.state = {
            selected: null
        }
    }
    displayTasks(){
        var data = this.props.data;
        if(data.loading){
            return( <div>Loading tasks...</div> );
        } else {
            return data.tasks.map(task => {
                return(
                    <li key={ task.id } onClick={ (e) => this.setState({ selected: task.id }) }>{ task.name }</li>                );
            })
        }
    }
    render(){
        return(
            <div>
                <ul id="task-list">
                    { this.displayTasks() }
                </ul>
                <TaskDetails taskid={this.state.selected} />
            </div>
        );
    }
}

export default graphql(getTasksQuery)(TaskList);
