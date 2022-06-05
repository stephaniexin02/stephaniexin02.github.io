const 
    firstname=document.getElementById('first-name'),
    lastName=document.getElementById('last-name'),
    email=document.getElementById('email-address'),
    address1=document.getElementById('Address-1'),
    address2=document.getElementById('Address-2'),
    company=document.getElementById('comapny'),
    city=document.getElementById('city'),
    state=document.getElementById('state'),
    postcode=document.getElementById('postcode'),
    phonenumber=document.getElementById('phone');


const
    submissionStatus = document.querySelector('.submission-status');
    continueBTN=document.getElementsByClassName('btn-checkout');


submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let isValidForm = validateInputValues();
    if(isValidForm){
        submissionStatus.classList.add('successMessage');
        submissionStatus.textContent = "Registration succeeded!";
    } else {
        submissionStatus.classList.add('errorMessage');
        submissionStatus.textContent = "Registration failed!";
    }

    setTimeout(() => {
        submissionStatus.classList.remove('errorMessage', 'successMessage');
    }, 1500);
});
    
function validateInputValues(){
    let inputValidationStatus=[]
    if(validateName(firstname.value)){
        inputStatus(true, firstname);
        inputValidationStatus[0]=true;
    }
    else {
        inputStatus(false, firstname);
        inputValidationStatus[0] = false;
    }

    if(validateName(lastName.value)){
        inputStatus(true, lastName);
        inputValidationStatus[0]=true;
    }
    else {
        inputStatus(false, lastName);
        inputValidationStatus[0] = false;
    }

    if(validateEmail(email.value)){
        inputStatus(true, email);
        inputValidationStatus[0]=true;
    }
    else {
        inputStatus(false, email);
        inputValidationStatus[0] = false;
    }

    if(validateName(address1.value)){
        inputStatus(true, address1);
        inputValidationStatus[0]=true;
    }
    else {
        inputStatus(false, address1);
        inputValidationStatus[0] = false;
    }

    if(validateName(address2.value)){
        inputStatus(true, address1);
        inputValidationStatus[0]=true;
    }
    else {
        inputStatus(false, address2);
        inputValidationStatus[0] = false;
    }

    if(validateName(company.value)){
        inputStatus(true, company);
        inputValidationStatus[0]=true;
    }
    else {
        inputStatus(false, company);
        inputValidationStatus[0] = false;
    }

    if(validateName(city.value)){
        inputStatus(true, city);
        inputValidationStatus[0]=true;
    }
    else {
        validateName(false, city);
        inputValidationStatus[0] = false;
    }

    if(validateName(state.value)){
        inputStatus(true, state);
        inputValidationStatus[0]=true;
    }
    else {
        inputStatus(false, state);
        inputValidationStatus[0] = false;
    }

    if(validateName(postcode.value)){
        inputStatus(true, postcode);
        inputValidationStatus[0]=true;
    }
    else {
        inputStatus(false, postcode);
        inputValidationStatus[0] = false;
    }

    if(validatePhoneNo(phonenumber.value)){
        inputStatus(true, phonenumber);
        inputValidationStatus[0]=true;
    }
    else {
        inputStatus(false, phonenumber);
        inputValidationStatus[0] = false;
    }
    return (inputValidationStatus.includes(false) ? false : true);


}

function validateName(nameTxt){
    const nameRegex = /^[A-Za-z]+$/; 
    return nameRegex.test(nameTxt);
}

function validateEmail(emailTxt){
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(emailTxt);
}

function validatePhoneNo(phoneTxt){
    const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    
   return phoneRegex.test(phoneTxt);
}


function inputStatus(status, input){
    let inputGroup = input.parentElement;
    if(status){
        inputGroup.classList.add('success');
    } else {
        inputGroup.classList.add('error');
    }

    setTimeout(() => {
        inputGroup.classList.remove('success', 'error');
    }, 1500);
}