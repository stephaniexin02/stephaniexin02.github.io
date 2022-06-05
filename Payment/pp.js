const form=document.getElementById('user-info');
const cardName=document.getElementById('card-name');
const cardNum=document.getElementById('card-num');
const expiry=document.getElementById('expiry');
const CVC=document.getElementById('CVC');
const infoTxt=document.getElementById('info-text');

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    checkInputs()
});

function checkInputs() {
    const cardNameValue=cardName.value.trim();
    const cardNumValue=cardNum.value.trim();
    const expiryValue=expiry.value.trim();
    const CVCValue=CVC.value.trim();
    const regex = new RegExp("^[0-9]{13,19}$");


if(cardNameValue === '') {
    setErrorFor(cardName, 'Card Name cannot be blank');
} else {
    setSuccessFor(cardName);
}

if(cardNumValue === '') {
    setErrorFor(cardNum, 'Card Number cannot be blank');
} else if (isNaN(cardNumValue)) {
    setErrorFor(cardNum, 'Not a valid Number');
} else {
    setSuccessFor(cardNum);
}

if(expiryValue === '') {
    setErrorFor(expiry, 'Date cannot be blank');
} else {
    setSuccessFor(expiry);
}

if(CVCValue === '') {
    setErrorFor(CVC, 'CVC cannot be blank');
} else if(isNaN(CVCValue)) {
    setErrorFor(CVC, 'Not a Number');
} else{
    setSuccessFor(CVC);
}
}

function setErrorFor(input, message) {
const formControl = input.parentElement;
const small = formControl.querySelector('small');
formControl.className = 'form-control error';
small.innerText = message;
}

function setSuccessFor(input) {
const formControl = input.parentElement;
formControl.className = 'form-control success';
}
