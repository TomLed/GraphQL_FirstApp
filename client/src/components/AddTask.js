import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import {getCollaboratorsQuery} from "../queries/queries";


class AddTask extends Component {
    displayCollaborators(){
        var data = this.props.data
        if(data.loading){
            return(<option>Loading Collaborators...</option>);
        }else{
            return data.collaborators.map(collaborator => {
                return(<option key={collaborator.id} value={collaborator.id}>{collaborator.name}</option>);
            })
        }
    }
    render() {
        return (
            <form id="add-book">

                <div className="field">
                    <label>Task name:</label>
                    <input type="text"/>
                </div>

                <div className="field">
                    <label>Date:</label>
                    <input type="date" name="Date"/>
                </div>


                <div className="field">
                    <label>Collaborator:</label>
                    <select>
                        <option>Select Collaborator</option>
                        {this.displayCollaborators()}
                    </select>
                </div>

                <button>+</button>

            </form>
        );
    }
}

export default graphql(getCollaboratorsQuery)(AddTask);
