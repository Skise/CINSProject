import {onblurClick} from './onblur.js'
import {signIn} from './signIn.js'
import {signUp} from './signUp.js'

const handleRegister = function () {
    let inputss = document.querySelectorAll('.loadinput');
    let registerInput = document.querySelectorAll('.registerInput');
    let a = 0;
    
    for (let i = 0, len = registerInput.length; i < len; i++) {
        if (registerInput[i].parentNode.children.length > 1) {
            alert('所填项中存在格式不正确现象， 不能注册！请重新填写');
            a++;
        }
    }
    for (let m = 0, len = registerInput.length; m < len; m++) {
        if (registerInput[m].parentNode.children.length > 1) {
            alert('所填项中存在格式不正确现象， 不能注册！请重新填写');
            a++;
        }
    }
    if (a = 0) {
        let registerWindow = document.querySelector('#registerWindow');
        if (registerWindow.style.display === 'none') {
            signIn();
        } else {
            signUp();
        }
    }   
}
export {handleRegister};