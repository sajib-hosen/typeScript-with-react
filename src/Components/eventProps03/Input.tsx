import React from 'react';
type inputProps ={
    value?: string,
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = (props: inputProps) => {

    const handleInputChange = ( event: React.ChangeEvent<HTMLInputElement> ) =>{
        console.log( 'this is', event.target.value)
    }

    return (
        <div>
            <input type="text" onChange={(event)=>{handleInputChange(event)}}  placeholder='input field' />
        </div>
    );
};

export default Input;

// https://www.youtube.com/watch?v=xNSIHFi8o2M&list=PLC3y8-rFHvwi1AXijGTKM0BKtHzVC-LSK&index=6