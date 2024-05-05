import firebaseConfig from "./firebaseConfig";

console.log(firebaseConfig);

import { validateSignInForm } from "./signInValidation";
import { initializeApp } from "firebase/app";
import {getAuth, signOut, signInWithEmailAndPassword} from "firebase/auth"

//INITIALIZE FIREBASE
initializeApp(firebaseConfig);

//INITIALIZE AUTH SERVICE
const authService = getAuth();


//SELECTING THE SIGN IN FORM ELEMENT

const emailInput = document.querySelector('.email');
const passwordInput = document.querySelector('.password');
const signInButton = document.querySelector('.sign-in-button');
const emailError = document.querySelector('.email-error');
const passwordError = document.querySelector('.password-error');
const signInForm = document.querySelector('.sign-in-form');
const submissionError = document.querySelector('.submission-error');

//SELECT SIGN OUT BUTTON
const signOutButton = document.querySelector('.sign-out-button');

//signInButton.addEventListener('click', (e)=>{
    //e.preventDefault();
    //validateSignInForm(emailInput.value, passwordInput.value, emailError, passwordError)
//})

//HANDLE SIGNOUT FUNCTION
function signOutUser(){
    signOut(authService)
    .then(()=>{
        console.log('sign out successfully')
        signOutButton.style.visibility = 'hidden';
        signInForm.style.disply = 'flex';
    })
    .catch((err)=> (console.log('error')));
}

signOutButton.addEventListener('click', (e) => {
    e.preventDefault();
    signOutUser();
});



//Handle sign in function
function signInUser() {
    const { signInFormStatus } = validateSignInForm(emailInput.value, passwordInput.value, emailError, passwordError);
    if (signInFormStatus()) {
        return;
    } else {
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
        signInWithEmailAndPassword(authService, email, password)
            .then(() => {
                signInForm.reset();
                signOutButton.style.visibility = 'visible';
                console.log('successfully sign in.');
            })
            .catch(err => {
                submissionError.textContent = err.message;
            });
    }
}

signInButton.addEventListener('click', (e) => {
    e.preventDefault();
    signInUser();
});









