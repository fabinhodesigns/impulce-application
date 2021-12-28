import React, { createContext, useContext, useState } from "react";
import * as AuthSessions from 'expo-auth-session';

const CLIENT_ID = '2f8225ac1628356c9c37';
const SCOPE = 'read:user';

type User = {
    id: string,
    avatar_url: string,
    login: string,
    name: string
}

type AuthContextData = {
    user: User | null;
    isSigningIn: boolean;
    signIn: () => Promise<void>;
    signOut: () => Promise<void>;
}

type AuthProviderProps = {
    children: React.ReactNode;
}

type AuthResponse = {
    token: string,
    user: User
}

type AuthorizationResponse = {
    params: {
        code?: string;
    }
}

export const AuthContext = createContext({} as AuthContextData)

function AuthProvider({ children }: AuthProviderProps) {

    const [isSigningIn, setIsSigningIn] = useState(false);
    const [user, setUser] = useState<User | null>(null);

    async function signIn() {
        setIsSigningIn(true);
        const authUrl = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=${SCOPE}`;
        const params = await AuthSessions.startAsync({ authUrl }) as AuthorizationResponse;

        if (params && params.code) {

        }
        setIsSigningIn(true);
    }

    async function signOut() {

    }

    return (
        <AuthContext.Provider value={{
            signIn,
            signOut,
            user,
            isSigningIn,

        }}>
            {children}
        </ AuthContext.Provider>
    )
}

function useAuth() {
    const context = useContext(AuthContext);

    return context;
}

export { AuthProvider, useAuth }