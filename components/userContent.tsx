import { initializeApp } from 'firebase/app';
import {
  Auth,
  createUserWithEmailAndPassword,
  fetchSignInMethodsForEmail,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  User as FirebaseUser,
} from 'firebase/auth';
import React, { useContext, useEffect, useState } from 'react';

const firebaseConfig = {
  apiKey: 'AIzaSyDnFNCZW8RbUnZ6aJbDmTo3TYQFBHoKh2M',
  authDomain: 'gallery-9e321.firebaseapp.com',
  databaseURL:
    'https://gallery-9e321-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'gallery-9e321',
  storageBucket: 'gallery-9e321.appspot.com',
  messagingSenderId: '346039256624',
  appId: '1:346039256624:web:854f46a4824d3b35314ff5',
};

export type User = {
  user: FirebaseUser;
  data: any;
};

export type UserContextProps = {
  user?: User;
  loading: boolean;
  logout?: () => Promise<void>;
  login?: (username: string, password: string) => Promise<FirebaseUser>;
  createUser?: (username: string, password: string) => Promise<FirebaseUser>;
  userExists?: (username: string) => Promise<boolean>;
  deleteUser?: (password: string) => Promise<void>;
};

export let auth: Auth;
const UserContext = React.createContext<UserContextProps>(null);

export const useAuth = () => useContext(UserContext);

const login = async (username: string, password: string) => {
  const cred = await signInWithEmailAndPassword(auth, username, password);
  return cred?.user;
};
const logout = async () => {
  return signOut(auth);
};
const createUser = async (username: string, password: string) => {
  const cred = await createUserWithEmailAndPassword(auth, username, password);
  return cred?.user;
};
const deleteUser = async (password: string) => {
  const email = auth?.currentUser?.email;
  if (!email) {
    throw new Error('Action has failed');
  }
  await signInWithEmailAndPassword(auth, email, password);
  await auth.currentUser?.delete();
};
const userExists = async (email: string) => {
  try {
    const signInMethods = await fetchSignInMethodsForEmail(auth, email);
    return signInMethods.length > 0;
  } catch (error) {
    if (error?.code !== 'auth/invalid-email') {
      throw error;
    }
    return false;
  }
};

const initializeFirebase = () => {
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  // Initialize Firebase Authentication and get a reference to the service
  auth = getAuth(app);
};
const defaultState: Pick<UserContextProps, 'user' | 'loading'> = {
  loading: true,
};
const createFullUser = (user: FirebaseUser): User => {
  // todo: take or fetch proper data
  return {
    user,
    data: {
      /* any data */
    },
  };
};
export const UserContextProvider: React.FC = ({ children }) => {
  const [{ loading, user }, setUser] = useState(defaultState);

  useEffect(() => {
    initializeFirebase();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser({ loading: false, user: user ? createFullUser(user) : null });
      // @ts-ignore - for dev purposes
      window.dpdLogout = user
        ? () => logout().then(() => console.log('User has logout.'))
        : () => console.log('No one was here..');
    });
    return () => unsubscribe();
  }, []);

  const hasUser = !loading && !!user;
  return (
    <UserContext.Provider
      value={{
        user,
        logout: hasUser ? logout : undefined,
        login: hasUser ? undefined : login,
        createUser: hasUser ? undefined : createUser,
        userExists: hasUser ? undefined : userExists,
        deleteUser: hasUser ? deleteUser : undefined,
        loading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export const useUserContext = () => {
  // during SSR rendering, when componenet is probed in getDataFromTree() useContext may return null;
  return useContext(UserContext) ?? (defaultState as UserContextProps);
};
