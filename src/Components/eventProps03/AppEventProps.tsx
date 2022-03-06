import React from 'react';
import Button from './Button';
import Input from './Input';

const AppEventProps = () => {

    

    return (
        <div className='border-2'>
            <Button handleClick={(event, id)=>{ console.log('button clicked', event, id ) }}/>
            <Input value='sajib' handleChange={(event) =>{console.log(event)}} />
        </div>
    );
};

export default AppEventProps;