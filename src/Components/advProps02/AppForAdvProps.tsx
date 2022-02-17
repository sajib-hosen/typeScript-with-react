import React from 'react';
import Heading from './Heading';
import Optional from './Optional';
import Oscar from './Oscar';
import Status from './Status';


const AppForAdvProps = () => {
    return (
        <div>
            <p>Hi this is from advance props, video 05</p>
            <Status status='error' />

            {/* passing text/children through conponent  */}
            <Heading>This is of heading 22569</Heading>

            {/* passing tag/children through conponent  */}
            <Oscar>  
                <h1>i'm using reactNode here</h1>
            </Oscar>

            {/* passing Optional/children through conponent  */}
            <Optional name="sajib Hosen" age={10}/>

        </div>
    );
};

export default AppForAdvProps;