
const validateSignInForm = (email, password, emailErrorElement, PassErrorElement) =>{
    const errors = {
        errorStatus: false,
        emailError: '',
        passwordError: ''
    }
    if(!email && !password){
        errors.errorStatus = false;
        errors.emailError = 'Email is required*';
        errors.passwordError = 'Password is required*';

        emailErrorElement.style.visibility = 'visible';
        PassErrorElement.style.visibility = 'visible';

        emailErrorElement.textContent = errors.emailError;
        PassErrorElement.textContent = errors.passwordError;
    } else if (!email){
        errors.errorStatus = true;
        errors.emailError = 'Email is required*';
        errors.passwordError = '';

        emailErrorElement.style.visibility = 'visible';
        PassErrorElement.style.visibility = 'hidden';

        emailErrorElement.textContent = errors.emailError;
        PassErrorElement.textContent = errors.passwordError;
    } else if(!password){
        errors.errorStatus = true;
        errors.emailError = '';
        errors.passwordError = 'Password is required*';

        emailErrorElement.style.visibility = 'hidden';
        PassErrorElement.style.visibility = 'visible';

        emailErrorElement.textContent = errors.emailError;
        PassErrorElement.textContent = errors.passwordError;
    } else {
        errors.errorStatus = false;
        errors.emailError = '';
        errors.passwordError = '';

        emailErrorElement.style.visibility = 'hidden';
        PassErrorElement.style.visibility = 'hidden';

        emailErrorElement.textContent = errors.emailError;
        PassErrorElement.textContent = errors.passwordError;
    }

    const signInFormStatus = () =>{
        return errors.errorStatus
    }

    return {signInFormStatus}
}

export { validateSignInForm }