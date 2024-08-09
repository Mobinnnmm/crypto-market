import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { auth } from './firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [authStatus, setAuthStatus] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setAuthStatus(true);
      } else {
        setUser(null);
        setAuthStatus(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const register = async ({ email, password }) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
      setAuthStatus(true);
      router.push('/');
    } catch (error) {
      console.error('Error during registration:', error);
      throw error;
    }
  };

  const login = async ({ email, password }) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
      setAuthStatus(true);
      router.push('/');
    } catch (error) {
      console.error('Error during login:', error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      setAuthStatus(false);
      router.push('/login');
    } catch (error) {
      console.error('Error during logout:', error);
      throw error;
    }
  };

  return {
    user,
    register,
    login,
    logout,
    isAuthenticated: authStatus,
  };
};
