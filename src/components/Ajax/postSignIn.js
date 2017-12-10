import {postRequset} from './levelOneAjax/postInterface.js'
import {keyToVerifyCode} from '../verificationCodePic.js'

const postSignIn = function (body, cb) {
    const url = '/dataCastle/user/signIn';
    let header = keyToVerifyCode;
    return postRequset(url, body, header, cb);
}

export {postSignIn};