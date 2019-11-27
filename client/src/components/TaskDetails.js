import React, { Component } from 'react';
import {graphql} from 'react-apollo';
import {getTaskQuery} from "../queries/queries";

class TaskDetails extends Component {
    render() {
        return(
            <div id="task-details">
                <p>Output task details here</p>
            </div>
        );
    }
}

export default graphql(getTaskQuery)(TaskDetails);