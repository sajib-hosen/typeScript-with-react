import React from 'react';

type personProps ={
    name:{
        first: string,
        second: string
    }
}

const Persone = (props: personProps) => {
    return (
        <div>
            <p>Persone Name {props.name.first} {props.name.second}</p>
        </div>
    );
};

export default Persone;