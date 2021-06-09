import React from 'react';

const BlogPost = ({ post }) => {
    const { title, description, img } = post;
    return (
        <div className='w-72 shadow mb-5'>
            <img src={img} alt={img} />
            <div className="p-3">
                <h3 className='text-xl text-pink-500 py-2'>{title}</h3>
                <p className='text-gray-600'>{description}</p>
            </div>
        </div>
    );
};

export default BlogPost;