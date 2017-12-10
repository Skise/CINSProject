import {getRequest} from './levelOneAjax/getInterface.js'

const getVerifyCode = function () {
    const url = '/dataCastle/user/verifyCode';
    return getRequest(url);
}

export {getVerifyCode};