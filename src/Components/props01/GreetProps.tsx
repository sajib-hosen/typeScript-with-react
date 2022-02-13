import React from 'react';

type greetType = {
    name: string,
    age: number,
    isLoading: boolean
}

const GreetProps = (props: greetType) => {
    return (
        <div>
            { props.isLoading && <p>I'm {props.name}, I'm {props.age}</p>}
        </div>
    );
};

export default GreetProps;