import React from 'react';

type OptionalProps = {
    name: string,
    age: number,
    marrige?: string
}
const Optional = (props: OptionalProps) => {
    return (
        <div>
            <p>name: {props.name} age: {props.age} marrige: {props.marrige}</p>
        </div>
    );
};

export default Optional;