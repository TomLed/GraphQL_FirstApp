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
    mutation($name: String!, $date: Date!, $collaboratorid: ID!){
        addTask(name:$name, date:$date, collaboratorid: $collaboratorid){
            name
            id
        }
    }
`;

export{getCollaboratorsQuery, getTasksQuery, addTaskMutation};