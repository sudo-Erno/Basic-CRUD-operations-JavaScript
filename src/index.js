const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { ApolloServer } = require('apollo-server-express');

// Create application/json parser
const jsonParser = bodyParser.json();
const urlencoded = bodyParser.urlencoded({ extended: false }); // To save data. extended false means the user won't send huge amound of data (images)

// Importing routes
const indexRouter = require('./routes/index');

// Importing mongoose and the configuration
const mongoose = require('mongoose');
const { MONGODB } = require('../config');

// GrahQL
const typeDefs = require('./graphql/TypeDefs');
const resolvers = require('./graphql/Resolvers');

const app = express();

// Routes
app.get('/', urlencoded, indexRouter);
app.post('/add', urlencoded, indexRouter);
app.get('/delete/:id', urlencoded, indexRouter);

// Middlewares
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const server = new ApolloServer({ typeDefs, resolvers })
server.applyMiddleware({ app });

mongoose.connect(MONGODB, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((res) => app.listen({ port: 3000 }, () => {
        console.log(`🚀 Server listening at port 3000. Connected to DB.`);
    }))
    .catch((err) => console.log(err));