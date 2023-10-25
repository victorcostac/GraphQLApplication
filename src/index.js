const { ApolloServer, gql } = require("apollo-server");


// Toda request é POST
// Toda request bate no MESMO endpoint (/graphql)

// Query -> Obter informações (GET)
// Mutation -> Manipular dados (POST/PUT/PATCH/DELETE)
// Scalar Types -> String, Int, Boolean, Float e ID


const typeDefs = gql`

    type Query{
        hello: String
    }
`;
const resolvers = {
    Query: {
        hello: () => 'Hello world'
    }
};

const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({url}) => { console.log(`Server is running on ${url}` )})