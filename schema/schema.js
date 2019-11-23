/* Ce fichier va permettre de définir le schéma en décrivant les types d'objets, leurs relations et
comment intéragir avec ces données.
 */

const graphql = require ('graphql');

// On récupère la fonction GraphQLObjectType
const {GraphQLObjectType, GraphQLString} = graphql;

const FilmType = new GraphQLObjectType({
    name: 'Film',
    /* Il est utile de définir une fonciton plutôt qu'un objet, par exemple dans le cas suivant :
    When two types need to refer to each other, or a type needs to refer to itself in a field,
    you can use a function expression (aka a closure or a thunk) to supply the fields lazily.
     */
    fields: () => ({
        id: {type: GraphQLString},
        title: {type: GraphQLString},
        genre: {type: GraphQLString}
    })
})