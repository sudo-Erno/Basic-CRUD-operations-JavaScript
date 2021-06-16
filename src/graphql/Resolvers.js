const { gql } = require('apollo-server-express');

carArray = [];
messages = [];

let handleGetCars = () => {
    return carArray;
};

let handlePostMessage = (parent, { user, content }) => {
    let id = messages.length;
    messages.push({ id, user, content });
    return { id, user, content };
};

let handlePostCar = (parent, { brand, model }) => {
    let id = carArray.length;
    newCar = { id, brand, model };
    carArray.push(newCar);
    return newCar;
};

const resolvers = {
    Query: {
        messages: () => messages,
        cars: handleGetCars,
    },

    Mutation: {
        postMessage: handlePostMessage,
        postCar: handlePostCar

    }
}

module.exports = resolvers;