// package: posts
// file: posts.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class PostArgs extends jspb.Message { 
    getId(): number;
    setId(value: number): PostArgs;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostArgs.AsObject;
    static toObject(includeInstance: boolean, msg: PostArgs): PostArgs.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostArgs, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostArgs;
    static deserializeBinaryFromReader(message: PostArgs, reader: jspb.BinaryReader): PostArgs;
}

export namespace PostArgs {
    export type AsObject = {
        id: number,
    }
}

export class AuthorArgs extends jspb.Message { 
    getId(): number;
    setId(value: number): AuthorArgs;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AuthorArgs.AsObject;
    static toObject(includeInstance: boolean, msg: AuthorArgs): AuthorArgs.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AuthorArgs, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AuthorArgs;
    static deserializeBinaryFromReader(message: AuthorArgs, reader: jspb.BinaryReader): AuthorArgs;
}

export namespace AuthorArgs {
    export type AsObject = {
        id: number,
    }
}

export class PostInput extends jspb.Message { 
    getTitle(): string;
    setTitle(value: string): PostInput;

    getBody(): string;
    setBody(value: string): PostInput;

    getAuthorId(): number;
    setAuthorId(value: number): PostInput;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostInput.AsObject;
    static toObject(includeInstance: boolean, msg: PostInput): PostInput.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostInput, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostInput;
    static deserializeBinaryFromReader(message: PostInput, reader: jspb.BinaryReader): PostInput;
}

export namespace PostInput {
    export type AsObject = {
        title: string,
        body: string,
        authorId: number,
    }
}

export class Post extends jspb.Message { 
    getId(): number;
    setId(value: number): Post;

    getTitle(): string;
    setTitle(value: string): Post;

    getBody(): string;
    setBody(value: string): Post;


    hasAuthor(): boolean;
    clearAuthor(): void;
    getAuthor(): Author | undefined;
    setAuthor(value?: Author): Post;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Post.AsObject;
    static toObject(includeInstance: boolean, msg: Post): Post.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Post, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Post;
    static deserializeBinaryFromReader(message: Post, reader: jspb.BinaryReader): Post;
}

export namespace Post {
    export type AsObject = {
        id: number,
        title: string,
        body: string,
        author?: Author.AsObject,
    }
}

export class PostList extends jspb.Message { 
    clearPostsList(): void;
    getPostsList(): Array<Post>;
    setPostsList(value: Array<Post>): PostList;
    addPosts(value?: Post, index?: number): Post;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostList.AsObject;
    static toObject(includeInstance: boolean, msg: PostList): PostList.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostList, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostList;
    static deserializeBinaryFromReader(message: PostList, reader: jspb.BinaryReader): PostList;
}

export namespace PostList {
    export type AsObject = {
        postsList: Array<Post.AsObject>,
    }
}

export class Author extends jspb.Message { 
    getId(): number;
    setId(value: number): Author;

    getName(): string;
    setName(value: string): Author;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Author.AsObject;
    static toObject(includeInstance: boolean, msg: Author): Author.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Author, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Author;
    static deserializeBinaryFromReader(message: Author, reader: jspb.BinaryReader): Author;
}

export namespace Author {
    export type AsObject = {
        id: number,
        name: string,
    }
}

export class Authors extends jspb.Message { 
    clearAuthorsList(): void;
    getAuthorsList(): Array<Author>;
    setAuthorsList(value: Array<Author>): Authors;
    addAuthors(value?: Author, index?: number): Author;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Authors.AsObject;
    static toObject(includeInstance: boolean, msg: Authors): Authors.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Authors, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Authors;
    static deserializeBinaryFromReader(message: Authors, reader: jspb.BinaryReader): Authors;
}

export namespace Authors {
    export type AsObject = {
        authorsList: Array<Author.AsObject>,
    }
}
