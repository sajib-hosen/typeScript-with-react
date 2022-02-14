import React from 'react';

type nameListProp ={
    names:{
        first:string,
        second: string
    }[] //declearing array of objects with the properties for each.
}

const PersonList = (props:nameListProp ) => {
    return (
        <div>
            {props.names.map(name =>{
                return (<p>{name.first} {name.second}</p>)
            })}
        </div>
    );
};

export default PersonList;