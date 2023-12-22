import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
    // state 
    const [user, setUser] = useState(null);
    const [authLoading, setAuthLoading] = useState(true);

    const auth = getAuth(app);

    // google provider and sign up 
    const googleProvider = new GoogleAuthProvider();

    const googleSignUp = () => {
        setAuthLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    // create user 
    const createUser = (email, password) => {
        setAuthLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const updateUserProfile = (name, photo) => {
        setAuthLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    const logOut = () => {
        setAuthLoading(true);
        return signOut(auth);
    }

    // watcher 
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setAuthLoading(false)
        })

        return () => {
            return unSubscribe();
        }
    }, [auth])

    // sending items throgh context 
    const authInfo = {
        user, 
        authLoading,
        googleSignUp,
        createUser,
        updateUserProfile,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;