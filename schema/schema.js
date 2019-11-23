/* Ce fichier va permettre de définir le schéma en décrivant les types d'objets, leurs relations et
comment intéragir avec ces données.
 */

const graphql = require ('graphql');
const _ = require ('lodash');

// dummy data, on utilisera mongoDB ensuite
var films = [
    {title: "La Grande Vadrouille", id: "1", authorid: "1"},
    {title: "Joker", id: "2", authorid: "2"},
    {title: "Parasite", id: "3", authorid: "3"}
];

var directors = [
    {name:"Gérard Oury", nationality: "Français", id: '1'},
    {name:"Todd Phillips", nationality: "Américain", id: '2' },
    {name:"Bong Joon-ho", nationality: "Coréen", id: '3'}
];


// On récupère la fonction GraphQLObjectType
const {GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID} = graphql;

const FilmType = new GraphQLObjectType({
    name: 'Film',
    /* Il est utile de définir une fonciton plutôt qu'un objet, par exemple dans le cas suivant :
    When two types need to refer to each other, or a type needs to refer to itself in a field,
    you can use a function expression (aka a closure or a thunk) to supply the fields lazily.
     */
    fields: () => ({
        id: {type: GraphQLID},
        title: {type: GraphQLString},
        director: {
            type: DirectorType,
            resolve(parent, args){
                return _.find(directors, {id: parent.authorid})
            }
        }
    })
});

const DirectorType = new GraphQLObjectType({
    name: 'Director',
    /* Il est utile de définir une fonciton plutôt qu'un objet, par exemple dans le cas suivant :
    When two types need to refer to each other, or a type needs to refer to itself in a field,
    you can use a function expression (aka a closure or a thunk) to supply the fields lazily.
     */
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        nationality: {type: GraphQLString}
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    // On définit ici le nom des requêtes et comment formuler la requête (ici avec un ID) pour obtenir un résultat
    fields: {
        film: {
            type: FilmType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args) {
                // code pour obtenir les donnée d'une db
                return _.find(films, {id: args.id});
            }
        },
        director: {
            type: DirectorType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args) {
            return _.find(directors, {id: args.id})
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});

