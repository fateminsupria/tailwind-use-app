import React from 'react';
import cleanser from '../images/skincare1.jpg';
import toner from '../images/skincare1.jpg';
import water from '../images/skincare2.jpg';
import exfolietor from '../images/skincare3.jpg';
import BlogPost from './BlogPost';

const blogposts = [
    {
        id: 1,
        title: 'Using Cleanser properly',
        description: 'According to Dr. Heather Rogers, a board-certified dermatologist and dermatologic surgeon, applying your skin care products in the proper order ensures that your skin receives the full benefits of each product.',
        img: cleanser
    },
    {
        id: 2,
        title: 'Drink proper liter water',
        description: '“In general, think thin-to-thick, but you also want to first use the products with the ingredients that are most important to penetrate into the skin (like antioxidants in serums).',
        img: water
    },
    {
        id: 3,
        title: 'Exfoliete your face',
        description: 'According to Dr. Annie Chiu, a board-certified dermatologist, it’s vital to apply an eye cream at least every night—if not twice a day—starting in your 20s.',
        img: exfolietor
    },
    {
        id: 4,
        title: 'Use toner regularly',
        description: 'Most people choose to skip toners, partly because there’s a lingering assumption that most toners are harsh and irritate the skin. Fortunately, that’s not the case anymore.',
        img: toner
    }
]

const Blog = () => {
    return (
        <div className='container p-5' id='blog'>
            <h2 className='text-black-400 text-3xl py-3 pl-3'>Blogs</h2>
            <div className='flex align-middle justify-around flex-wrap'>
                {
                    blogposts.map(post => <BlogPost key={post.id} post={post} />)
                }
            </div>
        </div>
    );
};

export default Blog;