import cookie from 'js-cookie';
import React, { useState, useEffect, useContext, createContext } from 'react';
import { createUser } from './db';
import firebase from './firebase';
import Router from "next/router"

const authContext = createContext();

export function AuthProvider({ children }) {
    const auth = useProvideAuth();
    return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
    return useContext(authContext);
};

function useProvideAuth() {
    const [user, setUser] = useState(null);

    const handleUser = async (rawUser) => {
        if (rawUser) {
            const user = await formatUser(rawUser);

            const { token, ...userWithoutToken } = user;

            createUser(user.uid, userWithoutToken)

            console.log(user)

            setUser(user);

            cookie.set("fast-feedback-auth", true, {
                expires: 1
            })

            return user;
        } else {
            setUser(false)

            cookie.remove("fast-feedback-auth")

            return false;
        }
    }

    const signinWithGithub = () => {
        Router.push("/sites")

        return firebase
            .auth()
            .signInWithPopup(new firebase.auth.GithubAuthProvider())
            .then((response) => handleUser(response.user));
    };

    const signinWithGoogle = () => {
        Router.push("/sites")

        return firebase
            .auth()
            .signInWithPopup(new firebase.auth.GoogleAuthProvider())
            .then((response) => handleUser(response.user));
    };


    const signout = () => {
        Router.push('/');

        return firebase
            .auth()
            .signOut()
            .then(() => handleUser(false));
    };

    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged(handleUser);

        return () => unsubscribe();
    }, []);

    return {
        user,
        signinWithGithub,
        signinWithGoogle,
        signout
    };
}

const getStripeRole = async () => {

    await firebase.auth().currentUser.getIdTokenResult()

    const decodedToken = await firebase.auth().currentUser.getIdTokenResult();

    return decodedToken.claims.stripeRole;
}

const formatUser = async (user) => {
    return {
        uid: user.uid,
        email: user.email,
        name: user.displayName,
        token: user.za,
        provider: user.providerData[0].providerId,
        photoUrl: user.photoURL,
        stripeRole: await getStripeRole()
    }
}