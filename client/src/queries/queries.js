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

export{getCollaboratorsQuery, getTasksQuery};