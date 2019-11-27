import React, { Component } from 'react';
import {graphql} from 'react-apollo';
import {getTaskQuery} from "../queries/queries";

class TaskDetails extends Component {
    displayTaskDetails(){
        const { task } = this.props.data;
        if(task){
            return(
                <div>
                    <h2>{ task.name }</h2>
                    <p>{ task.date }</p>
                    <p>{ task.collaborator.name }</p>
                    <p>Toutes les tâches attribuées à cette personne</p>
                    <ul className="other-tasks">
                        { task.collaborator.tasks.map(item => {
                            return <li key={item.id}>{ item.name }</li>
                        })}
                    </ul>
                </div>
            );
        } else {
            return( <div>Pas de tâche sélectionnée</div> );
        }
    }

    render() {
        return(
            <div id="task-details">
                { this.displayTaskDetails() }
            </div>
        );
    }
}

export default graphql(getTaskQuery, {
    options: (props) => {
        return {
            variables: {
                id: props.taskid
            }
        }
    }
})(TaskDetails);