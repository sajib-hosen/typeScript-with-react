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

// https://www.youtube.com/watch?v=9726Yq3Scjk&list=PLC3y8-rFHvwi1AXijGTKM0BKtHzVC-LSK&index=15