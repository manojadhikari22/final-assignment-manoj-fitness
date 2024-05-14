import firebaseConfig from "./firebaseConfig";
import { validateSignInForm } from "./signInValidation";
import { initializeApp } from "firebase/app";
import { getAuth, signOut, signInWithEmailAndPassword } from "firebase/auth";

//INITIALIZE FIREBASE
initializeApp(firebaseConfig);

//INITIALIZE AUTH SERVICE
const authService = getAuth();

//SELECTING THE SIGN IN FORM ELEMENT

const emailInput = document.querySelector(".email");
const passwordInput = document.querySelector(".password");
const signInButton = document.querySelector(".sign-in-button");
const emailError = document.querySelector(".email-error");
const passwordError = document.querySelector(".password-error");
const signInForm = document.querySelector(".sign-in-form");
const submissionError = document.querySelector(".submission-error");
const signIn = document.querySelector(".sign-in");

// login info
const loginInfo = document.querySelector(".login-info");

const loginButton = document.querySelector(".nav-lists-login-btn");
const logoutButton = document.querySelector(".nav-lists-logout-btn");
const registerBtn = document.querySelector(".nav-lists-register-btn");
const userEmail = localStorage.getItem("userEmail");

if (userEmail) {
  // If the user is logged in, hide the login button and show the logout button
  loginButton.style.display = "none";
  logoutButton.style.display = "block";
  signIn.style.visibility = "hidden";
  registerBtn.style.display = "none";
} else {
  // If the user is logged out, show the login button and hide the logout button
  loginButton.style.display = "block";
  logoutButton.style.display = "none";
  signIn.style.visibility = "visible";
  registerBtn.style.display = "block";
}



logoutButton.addEventListener("click", (e) => {
  e.preventDefault();
  signOutUser();
});

//Handle sign in function
function signInUser() {
  const { signInFormStatus } = validateSignInForm(
    emailInput.value,
    passwordInput.value,
    emailError,
    passwordError
  );
  if (signInFormStatus()) {
    return;
  } else {
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    signInWithEmailAndPassword(authService, email, password)
      .then(() => {
        signInForm.reset();
        // Store user info in localStorage
        localStorage.setItem("userEmail", email);
        const userEmail = localStorage.getItem("userEmail");

        window.location.href = './index.html';

        // Display user email in loginInfo element
        loginInfo.innerText = `Logged in as ${userEmail}`;
        loginButton.style.display = "none";
        logoutButton.style.display = "block";
        signIn.style.visibility = "hidden";
        registerBtn.style.display = "none";
      })
      .catch((err) => {
        submissionError.textContent = err.message;
      });
  }
}

signInButton.addEventListener("click", (e) => {
  e.preventDefault();
  signInUser();
});

window.onload = function () {
  const userEmail = localStorage.getItem("userEmail");
  if (userEmail) {
    loginInfo.innerText = `${userEmail}`;
  }
};

function signOutUser() {
  // Remove user info from localStorage
  localStorage.removeItem("userEmail");

  // Clear login info element
  loginInfo.innerText = "";
  loginButton.style.display = "block";
  logoutButton.style.display = "none";
  signIn.style.visibility = "visible";
  registerBtn.style.display = "block";
  // Refresh the page
  location.reload();
}

loginButton.addEventListener("click", (e) => {
  e.preventDefault();
  signInUser();
});

logoutButton.addEventListener("click", (e) => {
  e.preventDefault();
  signOutUser();
});







