const { GraphQLServer } = require("graphql-yoga");

const messages = [];


// every graphql server needs types
// define what a message looks like 
// ! == it is required
const typeDefs = `
    type Message {
        id: ID!
        user: String!
        content: String!
    }

    type Query {
        messages: [Message!]
    }
`;

// typeDefs + resolvers = Schema
// execute one time when type is duplicated
const resolvers = {
    Query: {
        messages: () => messages
    }
}

const server = new GraphQLServer({ typeDefs, resolvers });

server.start(({ port }) => {
    console.log(`Server on http://localhost:${port}/`);
});