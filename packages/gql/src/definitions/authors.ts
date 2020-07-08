import { gql } from 'apollo-server';
import { Empty } from 'google-protobuf/google/protobuf/empty_pb';
import { Author, AuthorArgs } from 'posts-grpc/src/proto/posts_pb';

import { Context } from './context'
import { Resolvers } from '../generated/graphql'

export const typeDefs = gql`
    extend type Query {
        getAuthors: [ Author ] 
    }

    type Author {
        id: Int!
        name: String!
        posts: [ Post ]
    }

    extend type Post {
        author: Author
    }
`

export const resolvers: Resolvers = {
    Query: {
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