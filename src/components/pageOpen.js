import {getName} from './localStorage.js'
// import {verifyCodePic} from './verificationCodePic.js'


const pageOpen = function () {
    let userName = document.querySelector('#userEmail');
    let passNum = document.querySelector('#passNum');
    // let imageNode = document.querySelector('#verifyCode');
    // verifyCodePic(imageNode);
    
    userName.value = getName('cinsUserName');
    if (!!userName.value){
        passNum.value = getName('cinsPassNum');
        userName.innerHTML = userName.value;
        passNum.innerHTML = passNum.value;
        let checkBox = document.querySelector('#checkBox');
        checkBox.checked = 'checked';
    }
}

export {pageOpen};