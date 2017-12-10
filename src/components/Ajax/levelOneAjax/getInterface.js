import {createXHR} from './bottomAjax/Ajax.js'

 function addURLParam (obj) {
    let query = '';
    for( let [keys, values] of Object.entries(obj)){
        query+= `&${encodeURIComponent(keys)}=${encodeURIComponent(values)}`
    }
    return query.slice(1);
}

const getRequest = function (url, queryParams='', header='') {
    let xhr = createXHR();
    let urls = !!queryParams ?  `url?${addURLParam(queryParams)}` : url;
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
                // xhr.open('get', url, false);
                // xhr.setRequestHeader('captcha-code', header);
                // xhr.send(null);
                // console.log(xhr);
                // return xhr;
            } else {
                alert('Request was unsuccessful: ' + xhr.status);
            }
        }
    };
    xhr.open('get', url, false);
    xhr.setRequestHeader('captcha-code', header);
    xhr.send(null);
    // console.log(xhr);
    return xhr;
}

export {getRequest};