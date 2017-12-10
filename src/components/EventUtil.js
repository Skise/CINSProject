const EventUtil = {
    addHandler: function (element, type, handler) {         //事件绑定
        if (element.addEventListener) {
            element.addEventListener(type, handler, false);
        } else if (element.attachEvent) {
            element.attachEvent('on' + type, handler);
        } else {
            element['on' + type] = handler;
        }
    },
    getEvent: function (event) {                            //返回对event对象的引用
        return event ? event : window.event;
    },
    getTarget: function (target) {                          //返回事件目标
        return event.target || event.srcElement;
    },
    preventDefault: function (event) {                      //取消事件默认行为
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    },
    removeHandler: function (element, type, handler) {      //取消事件绑定
        if (element.removeEventListener) {
            element.removeEventListener(type, handler, false);
        } else if (element.detachEvent) {
            element.detachEvent('on' + type, handler);
        } else {
            element['on' + type] = null;
        }
    },
    stopPropagation: function (event) {                     //阻止事件流
        if (event.stopPropagation) {
            event.stopPropagation();
        } else {
            event.cancelBubble = true;
        }
    },
    getRelatedTarget: function (event) {                    //鼠标事件
        if (event.relatedTarget) {
            return event.relatedTarget;
        } else if (event.toElement) {
            return event.toElement;
        } else if (event.fromElement) {
            return event.fromElement;
        } else {
            return null;
        }
    },
    getButton: function (event) {                           //兼容IE的button事件
        if (document.implementation.hasFeature('MouseEvents', '2.0')) {
            return event.button;
        } else {
            switch(event.button) {
                case 0:
                case 1:
                case 3:
                case 5:
                case 7:
                    return 0;
                case 2:
                case 6:
                    return 2;
                case 4:
                    return 1;
            }
        }
    },
    getWheelDelta: function (event) {                       //鼠标滚轮事件
        if (event.wheelDelta) {
            return (client.engine.opera && client.engine.opera < 9.5 ? -event.wheelDelta : event.wheelDelta);
        } else {
            return -event.detail * 40;
        }
    },
};

export {EventUtil};