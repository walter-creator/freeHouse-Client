// useAuth.js
import { useContext } from 'react';
import AuthContext from './AuthContext';
import { signup, signin } from './api';

export const useAuth = () => {
    const { user, token, login, logout } = useContext(AuthContext);

    const handleSignup = async (data) => {
        try {
            const response = await signup(data);
            login(response.user, response.token);
        } catch (error) {
            console.error("Signup error", error);
        }
    };

    const handleSignin = async (data) => {
        try {
            const response = await signin(data);
            login(response.user, response.token);
        } catch (error) {
            console.error("Signin error", error);
        }
    };

    return {
        user,
        token,
        login,
        logout,
        handleSignup,
        handleSignin,
    };
};
