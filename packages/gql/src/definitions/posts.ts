import { gql } from 'apollo-server';
import { Empty } from 'google-protobuf/google/protobuf/empty_pb';
import { PostArgs, PostInput } from 'posts-grpc/src/proto/posts_pb';

import { Context } from './context'
import { Resolvers } from '../generated/graphql'

export const typeDefs = gql`
    extend type Query {
        getPosts: [ Post ]
        getPostById(id: Int!): Post! 
    }

    extend type Mutation {
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
    }
`

export const resolvers: Resolvers = {
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
        }
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
    }
}