import React from 'react';

type statusProps = {
    status: 'loading' | 'success' | 'error'
}

const Status = ( props: statusProps) => {
    let message;
    if(props.status === 'loading'){
        message = "Loading ..."
    }
    else if (props.status === 'success'){
        message = "Data fetch success !!"
    }
    else if (props.status === 'error'){
        message = "Error fetching data"
    }
    return (
        <div>
            <h1>{message}</h1>
            <h1>Data factch success</h1>
            <h1>Error fetching data</h1>
        </div>
    );
};

export default Status;