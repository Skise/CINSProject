import {getName} from './localStorage.js'

const pageOpen = function () {
    let userName = document.querySelector('#userName');
    let passNum = document.querySelector('#passNum');

    console.log(localStorage.getItem('cinsUserName'));
    console.log(getName('cinsUserName')); 
    
    userName.value = getName('cinsUserName');
    if (!!userName.value){
        passNum.value = getName('cinsPassNum');
        userName.innerHTML = userName.value;
        passNum.innerHTML = passNum.value;
    }
}

export {pageOpen};