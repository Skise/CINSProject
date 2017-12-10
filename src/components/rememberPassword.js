import {saveName} from './localStorage.js'

const rePassword = function () {
    let userName = document.querySelector('#userEmail').value;
    let passNum = document.querySelector('#passNum').value;
    let checkBox = document.querySelector('#checkBox');

    if (checkBox.checked) {
        saveName('cinsUserName', userName);
        saveName('cinsPassNum', passNum);
    }
}

export {rePassword};