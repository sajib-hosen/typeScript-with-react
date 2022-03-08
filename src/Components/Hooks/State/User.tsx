import React, { useState } from 'react';

type authUser = {
    name: string,
    email: string
}

const User = () => {
    const [user, setUser] = useState< authUser | null >(null)   //                    | both are same
    // const [user, setUser] = useState< authUser >({} as authUser) // Type Assertion |
    const handleLogIn = () => {
        setUser({
            name: 'SAJIB',
            email: 'sajib.201h@gmail.com'
        })
    }

    const handleOut = () => {
        setUser(null)
    }
    return (
        <div>
            <button onClick={handleLogIn}>Log In</button>
            <button onClick={handleOut}>Log Out</button>
            <div>The user Name is {user?.name} </div>
            <div>The user Email is {user?.email} </div>
        </div>
    );
};

export default User;