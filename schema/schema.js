/* Ce fichier va permettre de définir le schéma en décrivant les types d'objets, leurs relations et
comment intéragir avec ces données.
 */

const graphql = require ('graphql');
const _ = require ('lodash');
const graphql_iso_date = require ('graphql-iso-date');
const Task = require('../models/task.js');
const Collaborator = require('../models/collaborator')

// On récupère des fonctions de GraphQL
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLID,
    GraphQLList
} = graphql;

// Permet de gérer les dates
const {
    GraphQLDate,
    GraphQLTime,
    GraphQLDateTime
} = graphql_iso_date;


// dummy data, on utilisera mongoDB ensuite
/*var tasks = [
    {name: "Projet Développement mobile", date:"2007-12-03", id: "1", collaboratorid: "1"},
    {name: "Faire le ménage", date:"2007-12-03", id: "2", collaboratorid: "2"},
    {name: "Parasite", date:"2017-10-23", id: "3", collaboratorid: "3"},
    {name: "Very Bad Trip",date:"2007-07-21",  id: "4", collaboratorid: "2"}
];

var collaborators = [
    {name:"Gérard Oury", id: '1'},
    {name:"Todd Phillips", id: '2' },
    {name:"Bong Joon-ho", id: '3'}
];  */

const TaskType = new GraphQLObjectType({
    name: 'Task',
    /* Il est utile de définir une fonciton plutôt qu'un objet, par exemple dans le cas suivant :
    When two types need to refer to each other, or a type needs to refer to itself in a field,
    you can use a function expression (aka a closure or a thunk) to supply the fields lazily.
     */
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        date: {type: GraphQLDate},
        collaborators: {
            type: CollaboratorType,
            resolve(parent, args){
                //return _.find(collaborators, {id: parent.collaboratorid})
            }
        }
    })
});

const CollaboratorType = new GraphQLObjectType({
    name: 'Collaborator',
    /* Il est utile de définir une fonciton plutôt qu'un objet, par exemple dans le cas suivant :
    When two types need to refer to each other, or a type needs to refer to itself in a field,
    you can use a function expression (aka a closure or a thunk) to supply the fields lazily.
     */
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        tasks: {
            type: new GraphQLList(TaskType),
            resolve(parent, args){
                //return _.filter(tasks, {collaboratorid: parent.id})
            }
        }
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    // On définit ici le nom des requêtes et comment formuler la requête (ici avec un ID) pour obtenir un résultat
    fields: {
        task: {
            type: TaskType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args) {
                // code pour obtenir les donnée d'une db
                //return _.find(tasks, {id: args.id});
            }
        },
        collaborator: {
            type: CollaboratorType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args) {
                //return _.find(collaborators, {id: args.id})
            }
        },
        tasks: {
            type: new GraphQLList(TaskType),
            resolve(parent, args){
                //return tasks
            }
        },
        collaborators: {
            type: new GraphQLList(CollaboratorType),
            resolve(parent, args){
                //return collaborators
            }
        }
    }
});

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addCollaborator: {
            type: CollaboratorType,
            args: {
                name: {type: GraphQLString}
            },
            resolve(parent, args){
                let collaborator = new Collaborator({
                  name: args.name,
                });
                return collaborator.save();
            }
        },
        addTask: {
            type: TaskType,
            args: {
                name: {type: GraphQLString},
                date: {type: GraphQLDate},
                collaboratorid: {type: GraphQLID}
            },
            resolve(parent, args){
                let task = new Task({
                    name: args.name,
                    date: args.date,
                    collaboratorid: args.collaboratorid
                });
                return task.save();
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});

