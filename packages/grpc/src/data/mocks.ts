import { Post, Author } from '../proto/posts_pb';

export const authors: Author.AsObject[] = [
    { id: 1, name: 'Brock Reece' },
    { id: 2, name: 'Mitch Reece' }
]

export const posts: Post.AsObject[] = [
    {id: 1, title: 'Foo', body: 'test', author: authors[0]},
    {id: 2, title: 'Bar', body: 'another bit of text', author: authors[0]},
    {id: 3, title: 'Baz', body: 'here is some body text', author: authors[1]}
]