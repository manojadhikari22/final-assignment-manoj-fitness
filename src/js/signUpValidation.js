
const validateSignUpForm = (fullname, phone, email, password, errorMsg) =>{
    
    let errorStatus = false;
    if(!fullname && !phone && !email && !password){
        errorStatus = true;
        errorMsg.style.visibility = 'visible';
        errorMsg.textContent = 'Please fill out all the fields*.';
    } else {
        errorStatus = false;
        errorMsg.style.visibility = 'hidden';
        errorMsg.textContent = '';
    }

    const signUpErrorStatus = ()=>{
        return errorStatus
    }
    return {signUpErrorStatus}
}

export { validateSignUpForm }