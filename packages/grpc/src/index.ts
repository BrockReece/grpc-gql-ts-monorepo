import grpc from 'grpc';
import { IPostsServer, PostsService } from './proto/posts_grpc_pb';

import { PostsServer } from './services/posts'

const server = new grpc.Server();
server.addService<IPostsServer>(PostsService, new PostsServer());
console.log(`Listening on ${process.env.PORT || 6789}`);
server.bind(`localhost:${process.env.PORT || 6789}`, grpc.ServerCredentials.createInsecure());
server.start();