import merge from 'lodash.merge'
import { ApolloServer, gql } from 'apollo-server';

import context from './definitions/context'
import { Resolvers } from './generated/graphql'
import { typeDefs as postTypeDefs, resolvers as postResolvers } from './definitions/posts'
import { typeDefs as authorTypeDefs, resolvers as authorResolvers } from './definitions/authors'

const typeDefs = [
    gql`
        type Query {
            _empty: String
        }

        type Mutation {
            _empty: String
        }
    `, 
    postTypeDefs,
    authorTypeDefs 
]

const resolvers: Resolvers = merge(postResolvers, authorResolvers)    
const tracing = true

const server = new ApolloServer({ 
    resolvers, 
    typeDefs,
    context,
    tracing 
});

server
    .listen({ port: 4001 })
    .then(({ url }) => console.log(`Server ready at ${url}. `));

