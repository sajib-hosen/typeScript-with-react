import React from 'react';
import { personProps } from '../props.types';

const Persone = (props: personProps) => {
    return (
        <div>
            <p>Persone Name {props.name.first} {props.name.second}</p>
        </div>
    );
};

export default Persone;