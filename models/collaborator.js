const mongoose = require('mongoose');
const Schema =  mongoose.Schema;

const collaboratorSchema = new Schema ({
    name: String,
});

module.exports = mongoose.model('Collaborator', collaboratorSchema);