// package: posts
// file: posts.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as posts_pb from "./posts_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

interface IPostsService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getPosts: IPostsService_IGetPosts;
    getPostById: IPostsService_IGetPostById;
    getAuthors: IPostsService_IGetAuthors;
    getPostsByAuthor: IPostsService_IGetPostsByAuthor;
    addPost: IPostsService_IAddPost;
}

interface IPostsService_IGetPosts extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, posts_pb.PostList> {
    path: string; // "/posts.Posts/GetPosts"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<posts_pb.PostList>;
    responseDeserialize: grpc.deserialize<posts_pb.PostList>;
}
interface IPostsService_IGetPostById extends grpc.MethodDefinition<posts_pb.PostArgs, posts_pb.Post> {
    path: string; // "/posts.Posts/GetPostById"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<posts_pb.PostArgs>;
    requestDeserialize: grpc.deserialize<posts_pb.PostArgs>;
    responseSerialize: grpc.serialize<posts_pb.Post>;
    responseDeserialize: grpc.deserialize<posts_pb.Post>;
}
interface IPostsService_IGetAuthors extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, posts_pb.Authors> {
    path: string; // "/posts.Posts/GetAuthors"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<posts_pb.Authors>;
    responseDeserialize: grpc.deserialize<posts_pb.Authors>;
}
interface IPostsService_IGetPostsByAuthor extends grpc.MethodDefinition<posts_pb.AuthorArgs, posts_pb.PostList> {
    path: string; // "/posts.Posts/GetPostsByAuthor"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<posts_pb.AuthorArgs>;
    requestDeserialize: grpc.deserialize<posts_pb.AuthorArgs>;
    responseSerialize: grpc.serialize<posts_pb.PostList>;
    responseDeserialize: grpc.deserialize<posts_pb.PostList>;
}
interface IPostsService_IAddPost extends grpc.MethodDefinition<posts_pb.PostInput, posts_pb.Post> {
    path: string; // "/posts.Posts/AddPost"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<posts_pb.PostInput>;
    requestDeserialize: grpc.deserialize<posts_pb.PostInput>;
    responseSerialize: grpc.serialize<posts_pb.Post>;
    responseDeserialize: grpc.deserialize<posts_pb.Post>;
}

export const PostsService: IPostsService;

export interface IPostsServer {
    getPosts: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, posts_pb.PostList>;
    getPostById: grpc.handleUnaryCall<posts_pb.PostArgs, posts_pb.Post>;
    getAuthors: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, posts_pb.Authors>;
    getPostsByAuthor: grpc.handleUnaryCall<posts_pb.AuthorArgs, posts_pb.PostList>;
    addPost: grpc.handleUnaryCall<posts_pb.PostInput, posts_pb.Post>;
}

export interface IPostsClient {
    getPosts(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: posts_pb.PostList) => void): grpc.ClientUnaryCall;
    getPosts(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: posts_pb.PostList) => void): grpc.ClientUnaryCall;
    getPosts(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: posts_pb.PostList) => void): grpc.ClientUnaryCall;
    getPostById(request: posts_pb.PostArgs, callback: (error: grpc.ServiceError | null, response: posts_pb.Post) => void): grpc.ClientUnaryCall;
    getPostById(request: posts_pb.PostArgs, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: posts_pb.Post) => void): grpc.ClientUnaryCall;
    getPostById(request: posts_pb.PostArgs, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: posts_pb.Post) => void): grpc.ClientUnaryCall;
    getAuthors(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: posts_pb.Authors) => void): grpc.ClientUnaryCall;
    getAuthors(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: posts_pb.Authors) => void): grpc.ClientUnaryCall;
    getAuthors(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: posts_pb.Authors) => void): grpc.ClientUnaryCall;
    getPostsByAuthor(request: posts_pb.AuthorArgs, callback: (error: grpc.ServiceError | null, response: posts_pb.PostList) => void): grpc.ClientUnaryCall;
    getPostsByAuthor(request: posts_pb.AuthorArgs, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: posts_pb.PostList) => void): grpc.ClientUnaryCall;
    getPostsByAuthor(request: posts_pb.AuthorArgs, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: posts_pb.PostList) => void): grpc.ClientUnaryCall;
    addPost(request: posts_pb.PostInput, callback: (error: grpc.ServiceError | null, response: posts_pb.Post) => void): grpc.ClientUnaryCall;
    addPost(request: posts_pb.PostInput, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: posts_pb.Post) => void): grpc.ClientUnaryCall;
    addPost(request: posts_pb.PostInput, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: posts_pb.Post) => void): grpc.ClientUnaryCall;
}

export class PostsClient extends grpc.Client implements IPostsClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getPosts(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: posts_pb.PostList) => void): grpc.ClientUnaryCall;
    public getPosts(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: posts_pb.PostList) => void): grpc.ClientUnaryCall;
    public getPosts(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: posts_pb.PostList) => void): grpc.ClientUnaryCall;
    public getPostById(request: posts_pb.PostArgs, callback: (error: grpc.ServiceError | null, response: posts_pb.Post) => void): grpc.ClientUnaryCall;
    public getPostById(request: posts_pb.PostArgs, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: posts_pb.Post) => void): grpc.ClientUnaryCall;
    public getPostById(request: posts_pb.PostArgs, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: posts_pb.Post) => void): grpc.ClientUnaryCall;
    public getAuthors(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: posts_pb.Authors) => void): grpc.ClientUnaryCall;
    public getAuthors(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: posts_pb.Authors) => void): grpc.ClientUnaryCall;
    public getAuthors(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: posts_pb.Authors) => void): grpc.ClientUnaryCall;
    public getPostsByAuthor(request: posts_pb.AuthorArgs, callback: (error: grpc.ServiceError | null, response: posts_pb.PostList) => void): grpc.ClientUnaryCall;
    public getPostsByAuthor(request: posts_pb.AuthorArgs, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: posts_pb.PostList) => void): grpc.ClientUnaryCall;
    public getPostsByAuthor(request: posts_pb.AuthorArgs, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: posts_pb.PostList) => void): grpc.ClientUnaryCall;
    public addPost(request: posts_pb.PostInput, callback: (error: grpc.ServiceError | null, response: posts_pb.Post) => void): grpc.ClientUnaryCall;
    public addPost(request: posts_pb.PostInput, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: posts_pb.Post) => void): grpc.ClientUnaryCall;
    public addPost(request: posts_pb.PostInput, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: posts_pb.Post) => void): grpc.ClientUnaryCall;
}
