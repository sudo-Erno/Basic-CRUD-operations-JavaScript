const { model, Schema } = require('mongoose');

const MyModel = new Schema({
    title: String,
    description: String,
});

module.exports = model('myModel', MyModel);
