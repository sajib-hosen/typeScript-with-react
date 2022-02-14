import React from 'react';
import GreetProps from './GreetProps';
import Persone from './Persone';
import PersonList from './PersonList';

const AppForProps = () => {
    
    const prisonName = {
        first: "Sajib",
        second: "Hosen"
    }

    const nameList = [
        {
            first: 'Meherab',
            second:'Ratin'
        },
        {
            first: 'Sajib',
            second:'Hosen'
        },
        {
            first: 'Alamin',
            second:'Mullah'
        },
        {
            first: 'Alhadi',
            second:'Mens'
        },
        {
            first: 'Fahim',
            second:'Mullsh'
        },
        {
            first: 'Rafin',
            second:'Chakravordi'
        }
    ]
    
    return (
        <div>
            <GreetProps name="Sajib Hosen" age={24} isLoading={true} />
            <Persone name={prisonName} />
            <PersonList names={nameList} />
        </div>
    );
};

export default AppForProps;
// https://www.youtube.com/watch?v=mDu54a5U3OU&list=PLC3y8-rFHvwi1AXijGTKM0BKtHzVC-LSK&index=4