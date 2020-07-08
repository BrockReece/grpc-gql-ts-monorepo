// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var posts_pb = require('./posts_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_posts_AuthorArgs(arg) {
  if (!(arg instanceof posts_pb.AuthorArgs)) {
    throw new Error('Expected argument of type posts.AuthorArgs');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_posts_AuthorArgs(buffer_arg) {
  return posts_pb.AuthorArgs.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_posts_Authors(arg) {
  if (!(arg instanceof posts_pb.Authors)) {
    throw new Error('Expected argument of type posts.Authors');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_posts_Authors(buffer_arg) {
  return posts_pb.Authors.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_posts_Post(arg) {
  if (!(arg instanceof posts_pb.Post)) {
    throw new Error('Expected argument of type posts.Post');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_posts_Post(buffer_arg) {
  return posts_pb.Post.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_posts_PostArgs(arg) {
  if (!(arg instanceof posts_pb.PostArgs)) {
    throw new Error('Expected argument of type posts.PostArgs');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_posts_PostArgs(buffer_arg) {
  return posts_pb.PostArgs.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_posts_PostInput(arg) {
  if (!(arg instanceof posts_pb.PostInput)) {
    throw new Error('Expected argument of type posts.PostInput');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_posts_PostInput(buffer_arg) {
  return posts_pb.PostInput.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_posts_PostList(arg) {
  if (!(arg instanceof posts_pb.PostList)) {
    throw new Error('Expected argument of type posts.PostList');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_posts_PostList(buffer_arg) {
  return posts_pb.PostList.deserializeBinary(new Uint8Array(buffer_arg));
}


var PostsService = exports.PostsService = {
  getPosts: {
    path: '/posts.Posts/GetPosts',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: posts_pb.PostList,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_posts_PostList,
    responseDeserialize: deserialize_posts_PostList,
  },
  getPostById: {
    path: '/posts.Posts/GetPostById',
    requestStream: false,
    responseStream: false,
    requestType: posts_pb.PostArgs,
    responseType: posts_pb.Post,
    requestSerialize: serialize_posts_PostArgs,
    requestDeserialize: deserialize_posts_PostArgs,
    responseSerialize: serialize_posts_Post,
    responseDeserialize: deserialize_posts_Post,
  },
  getAuthors: {
    path: '/posts.Posts/GetAuthors',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: posts_pb.Authors,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_posts_Authors,
    responseDeserialize: deserialize_posts_Authors,
  },
  getPostsByAuthor: {
    path: '/posts.Posts/GetPostsByAuthor',
    requestStream: false,
    responseStream: false,
    requestType: posts_pb.AuthorArgs,
    responseType: posts_pb.PostList,
    requestSerialize: serialize_posts_AuthorArgs,
    requestDeserialize: deserialize_posts_AuthorArgs,
    responseSerialize: serialize_posts_PostList,
    responseDeserialize: deserialize_posts_PostList,
  },
  addPost: {
    path: '/posts.Posts/AddPost',
    requestStream: false,
    responseStream: false,
    requestType: posts_pb.PostInput,
    responseType: posts_pb.Post,
    requestSerialize: serialize_posts_PostInput,
    requestDeserialize: deserialize_posts_PostInput,
    responseSerialize: serialize_posts_Post,
    responseDeserialize: deserialize_posts_Post,
  },
};

exports.PostsClient = grpc.makeGenericClientConstructor(PostsService);
