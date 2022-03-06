import React from 'react';
type styleProps = {
    styles: React.CSSProperties
}

const Container = ( props: styleProps) => {
    return (
        <div style={props.styles}>
            Hi This is from Stypes Props
        </div>
    );
};

export default Container;