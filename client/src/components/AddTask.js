import React, { Component } from 'react';
import {graphql} from 'react-apollo';
import {getCollaboratorsQuery, addTaskMutation} from "../queries/queries";
import {flowRight as compose} from 'lodash';


class AddTask extends Component {
    constructor(props){
        super(props);
        this.state = {
            name:"",
            date:Date(),
            collaboratorid:""
        }
    }
    displayCollaborators(){
        var data = this.props.getCollaboratorsQuery;
        console.log(this.props);
        if(data.loading){
            return(<option>Loading Collaborators...</option>);
        }else{
            return data.collaborators.map(collaborator => {
                return(<option key={collaborator.id} value={collaborator.id}>{collaborator.name}</option>);
            })
        }
    }
    submitForm(e){
        e.preventDefault();
        this.props.addTaskMutation({
            variables: {
                name: this.state.name,
                date: this.state.date,
                collaboratorid:this.state.collaboratorid,
            }
        });
    }
    render() {
        return (
            <form id="add-task" onSubmit={this.submitForm.bind(this)}>

                <div className="field">
                    <label>Task name:</label>
                    <input type="text" onChange={(e) => this.setState({name: e.target.value})}/>
                </div>

                <div className="field">
                    <label>Date:</label>
                    <input type="date" name="Date" onChange={(e) => this.setState({date: e.target.value})}/>
                </div>


                <div className="field">
                    <label>Collaborator:</label>
                    <select onChange={(e) => this.setState({collaboratorid: e.target.value})}>
                        <option>Select Collaborator</option>
                        {this.displayCollaborators()}
                    </select>
                </div>

                <button>+</button>

            </form>
        );
    }
}

export default compose(
    graphql(getCollaboratorsQuery, {name: "getCollaboratorsQuery"}),
    graphql(addTaskMutation, {name: "addTaskMutation"})
)(AddTask);
