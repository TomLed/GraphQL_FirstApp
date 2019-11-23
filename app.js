const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema')

const app = express();

/* Création d'un middleware
Là où on va envoyer toutes nos requêtes GraphQL. A chaque fois que quelqu'un ira sur
cette route, Express saura que l'on veut intéragir avec graphQL et donc fera appel à
graphqlHTTP qui pourra interpréter la requête.
On va spécifier ici le schéma et la structure de nos données
*/

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, function() {
    console.log('Listening on port 4000')
});
