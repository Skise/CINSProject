import {postSignUp} from './Ajax/postSignUp.js'

const signUp = function () {
    let userName = document.querySelector('#userName2');
    let mailAndress = document.querySelector('#mailAndress');
    let msPassword = document.querySelector('#msPassword');
    let registerCheckword = document.querySelector('#registerCheckword');
    
    let signUpXHR = postSignUp({
        userInfo : {
            username : userName.value,
            pwd : msPassword.value,
            mail : mailAndress.value
        },
        verifyCode : registerCheckword.value
    }, function(XMLHttpObject) {
        let xhr = XMLHttpObject.target;
        if (xhr.readyState === 4) {
            if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
                let registrationPage = document.querySelector('#registrationPage');
                let registerWindow = document.querySelector('#registerWindow');
                registerWindow.style.display = 'none';
                registrationPage.style.display = 'none';
            } else {
                alert('Request was unsuccessful: ' + xhr.status);
            }
        }
    });
}

export {signUp};