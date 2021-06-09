import React from 'react';

const InfoAbout = ({ infoabout }) => {

    const { title, description } = infoabout;

    return (
        <div className='w-80 text-center'>
            <div className="p-3 m-3">
                <h3 className='text-2xl text-pink-400 py-4'>
                    {title}
                </h3>
                <p className='text-gray-500'>{description}</p>
            </div>
        </div>
    );
};

export default InfoAbout;