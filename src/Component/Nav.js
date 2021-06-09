import React from 'react';

const Nav = () => {
    return (
        <nav className='bg-pink-400 py-3 flex'>
            <a href='#main' className='text-2xl text-white pl-3'>Skin care Blog</a>
            <ul className='ml-auto pr-4 flex'>
                <li><a href="#blog" className='nav-link'>Blog</a></li>
                
            </ul>
        </nav>
    );
};

export default Nav;