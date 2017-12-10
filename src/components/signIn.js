import {postSignIn} from './Ajax/postSignIn.js'

const signIn = function () {
    let userEmail = document.querySelector('#userEmail');
    let passNum = document.querySelector('#passNum');
    let checkword = document.querySelector('#checkword');

    let signInXHR = postSignIn({
        mail : userEmail.value,
        pwd : passNum.value,
        verifyCode : checkword.value
    }, function(XMLHttpObject) {
        let xhr = XMLHttpObject.target;
        if (xhr.readyState === 4) {
            if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
                alert('load succseeful');
            } else {
                alert('Request was unsuccessful: ' + xhr.status);
            }
        }
    });
}

export {signIn};