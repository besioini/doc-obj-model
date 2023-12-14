
//  Register
const register = document.getElementById('registration');
const registerName = register.elements['username'];
const registerEmail = register.elements['email'];
const registerPassword = register.elements['password'];
const registerPasswordCheck = register.elements['passwordCheck']
const registerTerms = register.elements['terms'];

// Login
const login = document.getElementById('login')
const loginName = login.elements['username'];
const loginPassword = login.elements['password'];


register.addEventListener('submit', validateRegisterForm);
login.addEventListener('submit', validateLoginForm);

let usersData = JSON.parse(localStorage.getItem('users')) || [];

function validateLoginForm(e){
    e.preventDefault();

    let validName = validateLoginName();
    let validPassword = validateLoginPassword();

    if(validName && validPassword){
        alert('Success Login!');
    }
    console.log('Clicked')
}

function validateRegisterForm(e){
    e.preventDefault();

    let validName = validateRegisterName();
    let validEmail = validateRegisterEmail();
    let validPassword = validateRegisterPassword();
    let validTerms = validateTerms();

    if (validName && validEmail && validPassword && validTerms) {
        let newUser = {
            username: registerName.value.toLowerCase(),
            email: registerEmail.value.toLowerCase(),
            password: registerPassword.value 
        };
        console.log("Storing user:", newUser);
        usersData.push(newUser);
        localStorage.setItem('users', JSON.stringify(usersData));
        console.log("Local Storage Set: ", JSON.parse(localStorage.getItem('users')));
        alert('Registration successful!');
        register.reset(); 
    }
    console.log(usersData)
}

function validateLoginName(){
    if(loginName.value === ''){
        alert('Please enter you name');
        loginName.focus();
        return false;
    }
    // else if(
    // usersData.forEach(element => {
    //     if(element.userName === loginName.value){
    //         alert('User Found!')
    //     }
    //         alert('User Not Found!, plaese register')
    // }));
    let foundUser = usersData.find(user => user.username === loginName.value.toLowerCase());
    if (!foundUser) {
        alert('User Not Found!, please register');
        return false;
    }
}
function validateLoginPassword(){
    if(loginPassword.value === ''){
        alert('Please enter your password');
        return false;
    }
    let correctPassword = usersData.find(user => user.password.matches(loginPassword.value))
    if(!correctPassword){
        alert('User Not Found!, please register');
        return false;
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
    let registerPasswordVal = registerPassword.value;
    let registerPasswordCheckVal = registerPasswordCheck.value;
    if(registerPasswordVal === ''){
        alert('Please enter a password!');
        registerPassword.focus();
        return false;
    }
    if(registerPasswordVal.length < 12){
        alert('Password should be more than 12 characters');
        registerPassword.focus();
        return false;
    }else if(registerPasswordVal.includes(registerName.value)){
        alert('Password should not contain username or password');
        registerPassword.focus();
        return false;             
    }else if(!/[A-Z]/.test(registerPasswordVal) || !/[a-z]/.test(registerPasswordVal)){
        alert('Password must have at least one uppercase and one lowercase letter');
        registerPassword.focus();
        return false;        
    }else if (!/\d/.test(registerPasswordVal)) {
        alert('Password must contain at least one number');
        registerPassword.focus();
        return false;
    }else if (/password/i.test(registerPasswordVal)) {
        alert('Password cannot contain the word "password"');
        registerPassword.focus();
        return false;
    }else if (registerPasswordVal !== registerPasswordCheckVal) {
        alert('Passwords do not match');
        registerPasswordCheck.focus();
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
