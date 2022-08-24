import React from 'react';
import Navigation from '../components/Navigation';
import Post from '../components/Post';

const Posts = () => {

    const posts = [
        {id: 1, title: "Harry potter", author: ' J.K Rowling', published: true },
        {id: 2, title: "Le seigneur des anneaux", author: 'J. R. R. Tolkien', published: true},
        {id: 3, title: "Baptiste code comme un pro", author: ' Baptiste Grias', published: false},
        {id: 4, title: "Game of Thrones", author: ' George R. R. Martin', published: true},
        {id: 5, title: "Baptiste code mieux que Julien", author: 'Baptiste Grias', published: false},
    ];


        
    return (
        <div>
        <Navigation />
        <h1>Nos Posts</h1>

        {/* {posts.map((post) => post.published && <Post key={post.id} title={post.title} author={post.author} published={post.published} /> 
        )} */}
        {posts.filter(post => post.published).map((post) => <Post key={post.id} title={post.title} author={post.author} published={post.published}  /> 
        )}

        </div>
    );
};

export default Posts;