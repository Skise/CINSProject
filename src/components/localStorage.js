const saveName = function (key, value) {
    localStorage.setItem(key,value);    
} 

const getName = function (key) {
    let data;
    try {
        data = localStorage.getItem(key);
    } catch(ex) {
        // 如果在开发环境才报错
        // if(__DEV__) {
            console.log('localStorage.getItem occured an error', ex.message);
        // }
    }
    return data;
}

export {saveName, getName};