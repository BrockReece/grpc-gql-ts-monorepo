import grpc from 'grpc';
import postServices from 'posts-grpc/src/proto/posts_grpc_pb';

export interface Context {
    grpc: {
        posts: postServices.PostsClient;
    };
}

export default () : Context => {
    return {
        grpc: {
            posts: new postServices.PostsClient(`localhost:${process.env.PORT || 6789}`, grpc.credentials.createInsecure())
        }
    }
}