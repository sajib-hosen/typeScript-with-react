import React, { useState } from 'react';

const LogedIn = () => {
    const [isLoggedin, setIsLoggedin] = useState(false)


    const handleLogIn = () => {
        setIsLoggedin(true)
    }

    const handleOut = () => {
        setIsLoggedin(false)
    }

    return (
        <div>
            <button onClick={handleLogIn}>Log In</button>
            <button onClick={handleOut}>Log Out</button>
            <div>The user is {isLoggedin ? "Logged In" : "Logged Out"} </div>
        </div>
    );
};

export default LogedIn;