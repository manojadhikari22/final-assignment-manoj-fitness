import firebaseConfig from "./firebaseConfig";

console.log(firebaseConfig);

import { validateSignUpForm } from "./signUpValidation";
import { initializeApp } from "firebase/app";
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth"

//INITIALIZE FIREBASE
initializeApp(firebaseConfig);

//INITIALIZE AUTH SERVICE
const authService = getAuth();

//SELECTING SIGN UP FORM ELEMENT
const signUpFullname = document.querySelector('.fullname');
const signUpPhone = document.querySelector('.phone');
const signUpEmail = document.querySelector('.sign-up-email');
const signUpPassword = document.querySelector('.sign-up-password');
const signUpError = document.querySelector('.sign-up-error');
const signUpForm = document.querySelector('.sign-up-form');
const signUpFormContainer = document.querySelector('.sign-up-form-container');
const signUpButton = document.querySelector('.sign-up-button');





//SIGN UP HANDLE
function signUpUser() {
    const { signUpErrorStatus } = validateSignUpForm(signUpFullname.value, signUpPhone.value, signUpEmail.value, signUpPassword.value, signUpError);
    if (signUpErrorStatus()) {
        return;
    } else {
        const newUser = {
            fullname: signUpFullname.value.trim(),
            phone: signUpPhone.value.trim(),
            signUpEmail: signUpEmail.value.trim(),
            signUpPassword: signUpPassword.value.trim()
        };
        createUserWithEmailAndPassword(authService, newUser.signUpEmail, newUser.signUpPassword)
            .then(() => {
                signUpForm.reset();
                
            })
            .catch((err)=> console.log(err.message))
    }
} 

signUpButton.addEventListener('click', (e) => {
    e.preventDefault();
    signUpUser();
});