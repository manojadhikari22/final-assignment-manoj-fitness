
const userEmail = localStorage.getItem("userEmail");
const loginButton = document.querySelector(".nav-lists-login-btn");
const logoutButton = document.querySelector(".nav-lists-logout-btn");
const registerBtn = document.querySelector(".nav-lists-register-btn");


if (userEmail) {
  // If the user is logged in, hide the login button and show the logout button
  loginButton.style.display = "none";
  logoutButton.style.display = "block";
  registerBtn.style.display = "none";
} else {
  // If the user is logged out, show the login button and hide the logout button
  loginButton.style.display = "block";
  logoutButton.style.display = "none";
  registerBtn.style.display = "block";
}


function signOutUser() {
    // Remove user info from localStorage
    localStorage.removeItem("userEmail");
  
    // Clear login info element
    loginButton.style.display = "block";
    logoutButton.style.display = "none";
    registerBtn.style.display = "block";
    // Refresh the page
    location.reload();
  }
  
  logoutButton.addEventListener("click", (e) => {
    e.preventDefault();
    signOutUser();
  });