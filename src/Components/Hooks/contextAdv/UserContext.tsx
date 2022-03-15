import { createContext, useState } from 'react';

export type AuthUser = {
    name: string,
    email: string
}

type contextProviderProps = {
    children: React.ReactNode;
}

type userContextType = {
    user: null | AuthUser,
    setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>
}

export const UserContext = createContext< userContextType | null >(null);

const ContextProvider = ({children}: contextProviderProps) =>{
    const [user, setUser ] = useState<AuthUser | null>(null)
    return <UserContext.Provider value={{user, setUser}}>
        {children}
    </UserContext.Provider>
}

export default ContextProvider;