import React from 'react';
import Container from './Container';

const AppStyleProps = () => {
    return (
        <div className='border-2'> 
            <Container styles={{ border: '2px solid black'}} />
        </div>
    );
};

export default AppStyleProps;