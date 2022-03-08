import React from 'react';
import { Box } from './Box';
import ThemeContextProvider from './ThemeContext';

const AppContext = () => {
    return (
        <div className='border-2'>
            <ThemeContextProvider>
                <Box/>
            </ThemeContextProvider>
        </div>
    );
};

export default AppContext;