import React from 'react';
import InfoAbout from './InfoAbout';

const about = [
    {
        id: 1,
        title: 'Use authentic product',
        description: 'As your skin naturally repairs itself at night, your nighttime routine should be all about treatment and giving your skin what it needs, says Dr. Rogers. “If your skin is looking dull, exfoliate. If it is irritated, hydrate and protect.”'
    },
    {
        id: 2,
        title: 'Product update',
        description: 'Sunscreen should be the last step in your daytime skin care routine if you’re using a physical or mineral sunscreen, which works by physically blocking UV rays. This step becomes tricky when you’re using a chemical sunscreen.'
    },
    {
        id: 3,
        title: 'Knowledge',
        description: 'This step becomes tricky when you’re using a chemical sunscreen.'
    }
]

const About = () => {
    return (
        <div className='container p-5' id='about'>
            <h2 className='text-3xl text-black-400 py-3 pl-3'>About Skin</h2>
            <div className="flex flex-wrap justify-around align-middle">
                {
                    about.map(infoabout => <InfoAbout key={infoabout.id} infoabout={infoabout} />)
                }
            </div>
        </div>
    );
};

export default About;