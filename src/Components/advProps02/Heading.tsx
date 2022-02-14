import React from 'react';

type headingProps = {
    children: string  // declearing children
}

const Heading = (props: headingProps) => {
    return (
        <div>
            <p>{props.children}</p>
        </div>
    );
};

export default Heading;