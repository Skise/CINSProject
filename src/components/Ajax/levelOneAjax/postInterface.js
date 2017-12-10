import {createXHR} from './bottomAjax/Ajax.js'

const postRequset = function (url, body, headers='', cb) {
    let xhr = createXHR();
    xhr.onreadystatechange = cb;

    xhr.open('post', url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('captcha-code', headers);
    xhr.send(JSON.stringify(body));
    return xhr;
}

export {postRequset};