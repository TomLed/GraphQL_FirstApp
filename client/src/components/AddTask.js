import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import {getCollaboratorsQuery} from "../queries/queries";


class AddTask extends Component {
    constructor(props){
        super(props);
        this.state = {
            name:"",
            date:"",
            collaboratorid:""
        }
    }
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
    submitForm(e){
        e.preventDefault();
        console.log(this.state)
    }
    render() {
        return (
            <form id="add-book" onSubmit={this.submitForm.bind(this)}>

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

export default graphql(getCollaboratorsQuery)(AddTask);
