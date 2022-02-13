import React from 'react';
import GreetProps from './GreetProps';
import Persone from './Persone';

const CallGreet = () => {
    
    const prisonName = {
        first: "Sajib",
        second: "Hosen"
    }
    
    return (
        <div>
            <GreetProps name="Sajib Hosen" age={24} isLoading={true} />
            <Persone name={prisonName} />
        </div>
    );
};

export default CallGreet;
// https://www.youtube.com/watch?v=mDu54a5U3OU&list=PLC3y8-rFHvwi1AXijGTKM0BKtHzVC-LSK&index=4