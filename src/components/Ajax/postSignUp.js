import {postRequset} from './levelOneAjax/postInterface.js'
import {keyToVerifyCode} from '../verificationCodePic.js'

const postSignUp = function (body, cb) {
    const url = '/dataCastle/user/signUp';
    let header = keyToVerifyCode;
    return postRequset(url, body, header, cb);
}

export {postSignUp};