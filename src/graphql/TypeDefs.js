const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Query {
        messages: [Message!]
        cars: [Car!]
    }

    type Mutation {
        postMessage(user: String!, content: String!): Message!
        postCar(brand: String!, model: String!): Car!
    }

    type Message {
        id: ID!
        user: String!
        content: String!
    }

    type Car {
        id: ID!
        brand: String!
        model: String!
    }

`;
module.exports = typeDefs;