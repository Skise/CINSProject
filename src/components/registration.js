import {EventUtil} from './EventUtil.js'
// import {verifyCodePic} from './verificationCodePic.js'

const register = function() {
    let registrationPage = document.querySelector('#registrationPage');
    let registerWindow = document.querySelector('#registerWindow');
    // let img2Node = document.querySelector('#verifyCode2');
    
    registrationPage.style.display = 'inline-block';
    registerWindow.style.display = 'inline-block';
    // verifyCodePic(img2Node);
};

const cancelRegis = function (e) {
    let node = EventUtil.getEvent(e);
    if (node.parentNode.tagName === 'BODY') {
        let registrationPage = document.querySelector('#registrationPage');
        let registerWindow = document.querySelector('#registerWindow');
        registerWindow.style.display = 'none';
        registrationPage.style.display = 'none';
    }
}

export {register, cancelRegis};