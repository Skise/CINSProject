import '../cinsCss/loadPageStyle.css'
import register from './registration'
import {rePassword} from './rememberPassword.js'
import {pageOpen} from './pageOpen.js'

pageOpen();

let regis = document.querySelector('#registration');
regis.onclick = register;

let sureLoad = document.querySelector('#sureBtn');
sureLoad.onclick = rePassword;