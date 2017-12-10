import '../static/style/loadPageStyle.css'
import {EventUtil} from './EventUtil.js'
import {register, cancelRegis} from './registration'
import {rePassword} from './rememberPassword.js'
import {pageOpen} from './pageOpen.js'
import {onblurClick} from './onblur.js'
// import {verifyCodePic} from './verificationCodePic.js'
// import {signUp} from './signUp.js'
// import {signIn} from './signIn.js'
import {handleRegister} from './handleRegister.js'

let regis = document.querySelector('#registration');
let sureBtn = document.querySelector('#sureBtn');
let x = document.querySelector('#x');
let inputs = document.querySelectorAll('.registerInput');
let inputss = document.querySelectorAll('.loadinput');
let img1Node = document.querySelector('#verifyCode');
let img2Node = document.querySelector('#verifyCode2');
let registerWindow = document.querySelector('#registerWindow');
let registrationPage = document.querySelector('#registrationPage');
let regisBtn = document.querySelector('#regisBtn');

// regis.onclick = register;
// sureBtn.onclick = signIn;
// img1Node.onclick = verifyCodePic.bind(this, img1Node);
// img2Node.onclick = verifyCodePic.bind(this, img2Node);
// registrationPage.onclick = cancelRegis;
// regisBtn.onclick = signUp;
// sureBtn.onclick = signIn;

pageOpen();
EventUtil.addHandler(regis, 'click', register);
EventUtil.addHandler(sureBtn, 'click', rePassword);
// EventUtil.addHandler(sureBtn, 'click', signIn);
EventUtil.addHandler(sureBtn, 'click', handleRegister);
// EventUtil.addHandler(img1Node, 'click', verifyCodePic.bind(this, img1Node));
// EventUtil.addHandler(img2Node, 'click', verifyCodePic.bind(this, img2Node));
EventUtil.addHandler(registrationPage, 'click', cancelRegis);
EventUtil.addHandler(regisBtn, 'click', handleRegister);

x.onclick = function () {
    // let registrationPage = document.querySelector('#registrationPage');
    registerWindow.style.display = 'none';
    registrationPage.style.display = 'none';
}

for (let i = 0; i < inputs.length;  i++) {
    EventUtil.addHandler(inputs[i], 'keyup', onblurClick);
    // inputs[i].onkeyup = onblurClick;
}

for (let i = 0; i < inputss.length;  i++) {
    EventUtil.addHandler(inputss[i], 'keyup', onblurClick);
    // inputss[i].onkeyup =  onblurClick;
}

if (registerWindow.style.display === 'inline-block') {
    if (event.keyCode === 13) {
        handleRegister();        
    }
}