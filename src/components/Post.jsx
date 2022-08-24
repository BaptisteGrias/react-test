import React from 'react';


const Post = ({title, author, published}) => {
    return (
        <div className='post-container'>
            <h3 className='posts post-title'>{title}</h3>
            <h4 className='posts post-author'>{author}</h4>
            <div className='posts post-published'>{published}</div>
        </div>
    );
};

export default Post;