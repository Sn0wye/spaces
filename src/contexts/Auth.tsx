import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { auth } from '../lib/firebase';
import { parseUser } from '../helpers/utils';

type AuthProps = {
  children: ReactNode;
};

export type User = {
  name: string | null;
  avatar: string | null;
  uid: string;
};

type AuthContextType = {
  user: User | null;
  signInWithGoogle: () => Promise<void>;
  signInWithGithub: () => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  signUpWithEmailAndPassword: (
    email: string,
    password: string,
    displayName: string
  ) => Promise<void>;
  logOut: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export function AuthProvider({ children }: AuthProps) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { displayName, photoURL, uid } = user;
        setUser({
          name: displayName,
          avatar: photoURL,
          uid: uid,
        });
      }
    });
    return () => unsubscribe();
  }, []);

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  async function signInWithGoogle() {
    const user = await signInWithPopup(auth, googleProvider);
    const parsedUser = parseUser(user);
    setUser(parsedUser);
  }

  async function signInWithGithub() {
    const user = await signInWithPopup(auth, githubProvider);
    const parsedUser = parseUser(user);
    setUser(parsedUser);
  }

  async function signIn(email: string, password: string) {
    const user = await signInWithEmailAndPassword(auth, email, password);
    const parsedUser = parseUser(user);
    setUser(parsedUser);
  }

  async function signUpWithEmailAndPassword(
    email: string,
    password: string,
    displayName: string
  ) {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    const parsedUser = {
      name: displayName,
      avatar: null,
      uid: user.user.uid,
    };
    setUser(parsedUser);
  }

  const logOut = async () => {
    await signOut(auth);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        signIn,
        signInWithGoogle,
        signUpWithEmailAndPassword,
        logOut,
        signInWithGithub,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
};
