import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  signInWithRedirect,
  getRedirectResult,
} from "firebase/auth";
import { auth } from "./firebase";

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

export function signInWithGoogle() {
  signInWithPopup(auth, googleProvider)
    .then((response) => {
      localStorage.setItem("user", response.user.uid);
    })
    .catch((error) => {
      alert(error);
    });
}

export function signInWithGithub() {
  signInWithRedirect(auth, githubProvider);
}

export function getGithubUser() {
  getRedirectResult(auth).then((result) => {
    console.log(result);
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
