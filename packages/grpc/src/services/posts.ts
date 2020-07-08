import grpc from 'grpc';
import { Empty } from 'google-protobuf/google/protobuf/empty_pb';
import { Post, PostList, PostInput, Author, Authors, PostArgs, AuthorArgs } from '../proto/posts_pb';
import { IPostsServer, PostsService } from '../proto/posts_grpc_pb';

import { posts, authors } from '../data/mocks';

export class PostsServer implements IPostsServer {
    getPosts(call: grpc.ServerUnaryCall<Empty>, callback: grpc.sendUnaryData<PostList>): void {
        const response = new PostList()
        const filteredPosts = posts.forEach(({id, title, body, author}) => {
            const post = new Post()
            post.setId(id)
            post.setTitle(title)
            post.setBody(body)

            const postAuthor = new Author()
            postAuthor.setId(author.id)
            postAuthor.setName(author.name)

            post.setAuthor(postAuthor)

            response.addPosts(post)           
        })
        
        callback(null, response);
    }

    getPostById(call: grpc.ServerUnaryCall<PostArgs>, callback: grpc.sendUnaryData<Post>): void {
        const postArgs = call.request as PostArgs
        const post = new Post()
        const foundPost = posts.find(post => post.id === postArgs.getId())
        
        if (foundPost) {
            const { id, title, body, author } = foundPost
            post.setId(id)
            post.setTitle(title)
            post.setBody(body)

            const postAuthor = new Author()
            postAuthor.setId(author.id)
            postAuthor.setName(author.name)
            

            post.setAuthor(postAuthor)
            callback(null, post);
        } else {
            callback(new Error('Unable to find Post'), null)
        }
    }

    getPostsByAuthor(call: grpc.ServerUnaryCall<AuthorArgs>, callback: grpc.sendUnaryData<PostList>): void {
        const response = new PostList()
        const AuthorArgs = call.request as AuthorArgs
        
        const filteredPosts = posts.
            filter(post => post.author.id === AuthorArgs.getId())
            .forEach(({id, title, body, author}) => {
                const post = new Post()
                post.setId(id)
                post.setTitle(title)
                post.setBody(body)

                const postAuthor = new Author()
                postAuthor.setId(author.id)
                postAuthor.setName(author.name)

                post.setAuthor(postAuthor)

                response.addPosts(post)           
            })
        
        callback(null, response);
    }

    getAuthors(call: grpc.ServerUnaryCall<Empty>, callback: grpc.sendUnaryData<Authors>): void {
        const response = new Authors()
        authors.forEach(({ id, name }) => {
            const author = new Author()
            author.setId(id)
            author.setName(name)
            
            response.addAuthors(author)
        })
        callback(null, response);
    }

    addPost(call: grpc.ServerUnaryCall<PostInput>, callback: grpc.sendUnaryData<Post>): void {
        const post = call.request as PostInput
        const newPost = new Post()

        newPost.setId(posts.length + 1)
        newPost.setBody(post.getBody())
        newPost.setTitle(post.getTitle())

        const author = new Author()
        const foundAuthor = authors.find(a => a.id === post.getAuthorId())
        if (foundAuthor) {
            author.setId(foundAuthor.id)
            author.setName(foundAuthor.name)
            newPost.setAuthor(author) 
        }
    
        posts.push(newPost.toObject())
        callback(null, newPost);
    }
}