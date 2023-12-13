
const register = document.getElementById('registration');
const registerName = register.elements['username'];
const registerEmail = register.elements['email'];
const registerPassword = register.elements['password'];
const registerPasswordCheck = register.elements['passwordCheck']
const registerTerms = register.elements['terms'];

console.log(registerTerms)

// let usersData = JSON.parse(localStorage.getItem('users')) || [];
// // Update the userAnswers and roundCounter in localStorage
// localStorage.setItem('userAnswers', JSON.stringify(userAnswers));
// // Add the user input to the answers array
// userAnswers.push(userInput);


console.log(userAnswers);
register.addEventListener('submit', validateRegisterForm);

function validateRegisterForm(e){
    e.preventDefault();

    let validName = validateRegisterName();
    let validEmail = validateRegisterEmail();
    let validPassword = validateRegisterPassword();
    let validTerms = validateTerms();

    if (validName && validEmail && validPassword && validTerms) {
        // Form is valid, you can proceed to submit the form or further processing
        console.log("Form Validated");
        window.confirm('Allow')
        alert('Submitted')
    }
}

function validateRegisterName(){
    let registerNameVal = registerName.value;
    if(registerNameVal === ''){
        alert('Please enter a name');
        registerName.focus();
        return false;
    }else if(registerNameVal.length < 3){
        alert('Name shud be at least four characters')
        registerName.focus();
        return false;
    }else if(/[^a-zA-Z0-9]/.test(registerNameVal)){
        alert('Username cannot conatain ay special characters!')
        registerName.focus();
        return false;
    }
}

function validateRegisterEmail(){
    let registerEmailVal = registerEmail.value;
    if(registerEmailVal === ''){
        alert('Please enter a valid email');
        registerEmail.focus();
        return false;
    }else if(!/^\S+@\S+\.\S+$/.test(registerEmailVal)) {
        alert('Please enter a valid email address');
        registerEmail.focus();
        return false;
    }else if(registerEmailVal.endsWith('@example.com')) {
        alert('Email from "example.com" domain is not allowed');
        registerEmail.focus();
        return false;
    }
}

function validateRegisterPassword(){
    // Passwords must be at least 12 characters long.
    // Passwords must have at least one uppercase and one lowercase letter.
    // Passwords must contain at least one number.
    // Passwords must contain at least one special character.
    // Passwords cannot contain the word "password" (uppercase, lowercase, or mixed).
    // Passwords cannot contain the username.
    // Both passwords must match.
    let registerPasswordVal = registerPassword.value;
    if(registerPasswordVal.length < 12){
        alert('Password should be more than 12 characters');
        registerPassword.focus();
        return false;
    }

}

function validateTerms(){
    if(!registerTerms.checked){
        alert('You must agree to terms and conditions');
        registerTerms.focus()
        return false;
    }
}
