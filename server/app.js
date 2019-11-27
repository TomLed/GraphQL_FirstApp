const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require ('cors');

const app = express();

//allow cross-origin requests
app.use(cors());

// connect to mlab database
mongoose.connect('mongodb://thomas:test123@ds037551.mlab.com:37551/gql-ecm');
mongoose.connection.once('open', () => {
    console.log('Connected to database')
});

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
