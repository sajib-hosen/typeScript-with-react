import React from 'react';
import User from './User';
import ContextProvider from './UserContext';

const AppContextAdv = () => {
    return (
        <div>
            <ContextProvider>
                <User />
            </ContextProvider>
        </div>
    );
};

export default AppContextAdv;