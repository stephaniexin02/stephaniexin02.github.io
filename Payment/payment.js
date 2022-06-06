/Validation Attempt/
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


if(cardNameValue === ''){
    setErrorFor(cardName, 'Card Name Cannot Be Blank')
}
else{
    setSuccessFor(cardName);
}
if(cardNumValue === ''){
    setErrorFor(cardNum, 'Card Number Cannot Be Blank')
}
else if(isCardNum(cardNumValue)){
    setErrorFor('email is not valid')
}
else{
    setSuccessFor(cardNum);
}

}
function setErrorFor(input, message){
    const infoTxt=input.parentElement;
    infoTxt.cardName = 'info-txt error';
}
function isCardNum(cardNum){
    return '^[0-9]{13,19}$'.test(cardNum);
}
