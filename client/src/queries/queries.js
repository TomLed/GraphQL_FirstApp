import {gql} from 'apollo-boost';

const getTasksQuery = gql`
    {
        tasks {
            name
            id
        }
    }
`;

const getCollaboratorsQuery = gql`
    {
        collaborators {
            name
            id
        }
    }
`;

const addTaskMutation = gql`
    mutation{
        addTask(name:"", date:null, collaboratorid: ""){
            name
            id
        }
    }
`;

export{getCollaboratorsQuery, getTasksQuery, addTaskMutation};