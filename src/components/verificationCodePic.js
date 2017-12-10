import {getVerifyCode} from './Ajax/getVerifyCode.js'

let keyToVerifyCode = ''
const verifyCodePic = function (node) {
    let verifyCodeXHR = getVerifyCode();
    // console.log(verifyCodeXHR.getResponseHeader('captcha-code'));
    keyToVerifyCode = verifyCodeXHR.getResponseHeader('captcha-code');
    node.src = 'data:image/png;base64,' + verifyCodeXHR.responseText;
}


export {verifyCodePic, keyToVerifyCode};