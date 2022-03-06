import React from 'react';
import LogedIn from './LogedIn';
import User from './User';

const AppState = () => {
    return (
        <div className='border-2'>
            <LogedIn />
            <User />
        </div>
    );
};

export default AppState;

// https://www.youtube.com/watch?v=LNpWuRUIR5A&list=PLC3y8-rFHvwi1AXijGTKM0BKtHzVC-LSK&index=10 