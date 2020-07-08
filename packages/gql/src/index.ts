import grpc from 'grpc';
import { Resolvers } from './generated/graphql'
import { ApolloServer, gql } from 'apollo-server';
import { Empty } from 'google-protobuf/google/protobuf/empty_pb';

import postServices from 'posts-grpc/src/proto/posts_grpc_pb';
import { PostArgs, PostInput, Author, AuthorArgs } from 'posts-grpc/src/proto/posts_pb';

export interface Context {
    grpc: {
        posts: postServices.PostsClient;
    };
}

const typeDefs = gql`
    type Query {
        getPosts: [ Post ]
        getPostById(id: Int!): Post! 
        getAuthors: [ Author ] 
    }

    type Mutation {
        addPost(post: PostInput!): Post
    }

    input PostInput {
        title: String!
        body: String!
        author: Int!
    }

    type Post {
        id: Int!
        title: String!
        body: String!
        author: Author
    }

    type Author {
        id: Int!
        name: String!
        posts: [ Post ]
    }
`

const resolvers: Resolvers = {
    Query: {
        getPosts: (root, args, { grpc }: Context) => {
            return new Promise((resolve, reject) => {
                grpc.posts.getPosts(new Empty(), (err, response) => {
                    if (err) return reject(err)
                    const posts = response.getPostsList()
                        .map(post => post.toObject())
                    
                    resolve(posts)
                })
            })
        },
        
        getPostById: (root, { id }, { grpc }: Context) => {
            return new Promise((resolve, reject) => {
                const postArgs = new PostArgs()
                postArgs.setId(id)
                grpc.posts.getPostById(postArgs, (err, post) => {
                    if (err) return reject(err)
                    resolve(post.toObject())
                })
            })
        },

        getAuthors: (root, args, { grpc }: Context) => {
            return new Promise((resolve, reject) => {
                grpc.posts.getAuthors(new Empty(), (err, response) => {
                    if (err) return reject(err)
                    const authors = response.getAuthorsList()
                        .map(author => author.toObject())
                    
                    resolve(authors)
                })
            })
        },
    },

    Mutation: {
        addPost: (root, { post }, { grpc }: Context) => {
            return new Promise((resolve, reject) => {
                const postInput = new PostInput()
                postInput.setTitle(post.title)
                postInput.setBody(post.body)
                postInput.setAuthorId(post.author)
                grpc.posts.addPost(postInput, (err, post) => {
                    if (err) return reject(err)
                    resolve(post.toObject())
                })
            })
        }
    },
    
    Author: {
        posts: (root: Author.AsObject, args, { grpc }: Context) => {
            return new Promise((resolve, reject) => {
                const autherArgs = new AuthorArgs()
                autherArgs.setId(root.id)
                grpc.posts.getPostsByAuthor(autherArgs, (err, response) => {
                    if (err) return reject(err)
                    const posts = response.getPostsList()
                        .map(post => post.toObject())
                    
                    resolve(posts)
                })
            })
        }
    }
}

const context = () : Context => {
    return {
        grpc: {
            posts: new postServices.PostsClient(`localhost:${process.env.PORT || 6789}`, grpc.credentials.createInsecure())
        }
    }
}

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

