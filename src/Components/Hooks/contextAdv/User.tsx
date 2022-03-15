import React, { useContext } from 'react';
import { UserContext } from './UserContext'

const User = () => {

    const userContext = useContext(UserContext)

    const handleLogin = () =>{
        if(userContext){
            userContext.setUser({
                name: 'Sajib Hosen',
                email: 'sajib.201h@gmail.com'
            })
        }
    }
    const handleLogOut = () =>{
        if(userContext){
            userContext.setUser(null)
        }
    }
    return (
        <div>
            <button onClick={handleLogin}>Log In</button>
            <button onClick={handleLogOut}>Log Out</button>
            <p>The User Name is: {userContext?.user?.name} </p>
            <p>The User Name is: {userContext?.user?.email} </p>
        </div>
    );
};

export default User;