import {EventUtil} from './EventUtil.js'

const onblurClick = function (e) {
    let node = e.target;
    // console.log('node', node);
    switch(node.name) {
        case 'username' :
            let pattern = /[\u4E00-\u9FA5]/;    //不正确，待修改
            if (pattern.test(node.value)) {
                nodeJudgement(1, node);
                let _span = node.parentNode.children[1];
                _span.innerHTML = '请输入正确的姓名';
            } else {
                nodeJudgement(2, node);
            }
            break;
    
        case 'studentID' :
            if (node.value.length != 12) {
                nodeJudgement(1, node);
                let _span = node.parentNode.children[1];
                _span.innerHTML = '请输入正确的学号';
            } else {
                nodeJudgement(2, node);
            }
            break;             
        
        case 'mailbox' :
            let pattern1 = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
            if (!!!pattern1.test(node.value)) {
                nodeJudgement(1, node);
                let _span = node.parentNode.children[1];
                _span.innerHTML = '请输入正确的邮箱地址';
            } else {
                nodeJudgement(2, node);
            }
            break;

        case 'password' :
            if (node.value.length > 14 || node.value.length < 5) {
                nodeJudgement(1, node);
                let _span = node.parentNode.children[1];
                _span.innerHTML = '密码长度为6-14个字符';
            } else {
                nodeJudgement(2, node);
            }
            break;

        case 'passwordSure' :
            let password = document.querySelector('#msPassword');
            if (node.value !== password.value) {
                nodeJudgement(1, node);
                let _span = node.parentNode.children[1];
                _span.innerHTML = '与密码不符，确认失败';
            } else {
                nodeJudgement(2, node);
            }
            break;       
    }
}

function nodeJudgement (n, node) {
    switch (n) {
        case 1 : 
            var length = node.parentNode.children.length;
            console.log(length);
            if (length === 1) {
                let _span = document.createElement('span');
                node.parentNode.appendChild(_span);
                if (node.parentNode.classList.contains('filed-container')) {
                    _span.classList.add('inputNotice');
                } else {
                    _span.classList.add('loadNotice');
                }
            }
            break;
        case 2 :
            let child = node.parentNode.children;
            if(child.length >= 2) {
                for (let i = child.length - 1; i > 0; i--) {
                    node.parentNode.removeChild(node.parentNode.children[i]);
                }   
            }
    }
}
export {onblurClick};