import { createContext, useState, useEffect } from 'react';
import { signInWithEmailAndPassword, onAuthStateChanged , signOut} from 'firebase/auth';
import { auth } from '../../Firebase/config.js';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const login = async (email, password) => {
        try {
            await signInWithEmailAndPassword( auth, email, password);
        } catch (error) {
            console.error('Error al iniciar sesión:', error.message);
            throw error;
        }
    };

    const logout = async () => {
        try {
            await signOut(auth);
        } catch (error) {
            console.error('Error al cerrar sesión:', error.message);
            throw error;
        }
    };

    return (
        <AuthContext.Provider value={{user, logout, login}}>
            {!loading && children}
        </AuthContext.Provider>
    );
};
