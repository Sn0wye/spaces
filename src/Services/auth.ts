import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./firebase";

const provider = new GoogleAuthProvider();

export function signInWithGoogle() {
  signInWithPopup(auth, provider)
    .then((response) => {
      localStorage.setItem("user", response.user.uid);
    })
    .catch((error) => {
      alert(error);
    });
}

export function signIn(email: string, password: string) {
  signInWithEmailAndPassword(auth, email, password).then((response) => {
    localStorage.setItem("user", response.user.uid);
  });
}

export function signUp(email: string, password: string) {
  createUserWithEmailAndPassword(auth, email, password).then((response) => {
    localStorage.setItem("user", response.user.uid);
  });
}
