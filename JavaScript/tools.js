/*
 * @Author: zoudecai
 * @Date: 2020-04-07 18:26:12
 * @Last Modified by: zoudecai
 * @Last Modified time: Do not edit
 * @Description: 基础方法库
 */
// 查询滚动条的位置
function getScrollOffset() {
    if (window.pageXOffset) {
        return {
            x: window.pageXOffset,
            y: window.pageYOffset
        }
    } else {
        return {
            x: document.body.scrollLeft + document.documentElement.scrollLeft,
            y: document.body.scrollTop + document.documentElement.scrollTop
        }
    }
}

// 返回浏览器视口尺寸
function getViewportOffset() {
    if(window.innerWidth) {
        return {
            w: window.innerWidth,
            h: window.innerHeight
        }
    } else {
        if (document.compatMode === "BackCompat") {
            return {
                w: document.body.clientWidth,
                h: document.body.clientHeight
            }
        } else {
            return {
                w: document.documentElement.clientWidth,
                h: document.documentElement.clientHeight
            }
        }
    }
}

// 获取样式属性方法
function getStyle(elem,prop) {
    if(window.getComputedStyle) {
       return window.getComputedStyle(elem, null)[prop];
    } else {
       return elem.currentStyle[prop];
    }
}

//给一个DOM对象添加该类型的事件处理函数
function addEvent(elem, type, handle) {
    if(elem.addEventListener) {
        elem.addEventListener(type, handle, false);
    } else if(elem.attachEvent) {
        elem.attachEvent('on' + type, function() {
            handle.call(elem);
        })
    } else{
        elem['on' + type] = handle;
    }
}

// 封装取消冒泡的函数
function stopBubble(event) {
    if(event.stopPropagation) {
        event.stopPropagation();
    }else{
        event.cancelBubble = true;
    }
}
// 封装阻止默认事件的函数
function cancelHandler(event) {
    if(event.preventDefault) {
        event.preventDefault();
    }else{
        event.returnValue = false;
    }
}

// 封装拖拽功能(鼠标按住方块跟着动，松开就不跟着走)
function drag(elem) {
    var disX,
        disY;
    addEvent(elem, 'mousedown', function(e) {
        var event = e || window.event;
        disX = event.clientX - parseInt(getStyle(elem, 'left'));
        disY = event.clientY - parseInt(getStyle(elem, 'top'));
        addEvent(document, 'mousemove', mouseMove);
        addEvent(document, 'mouseup', mouseUp);
        stopBubble(event);
        cancelHandler(event);
    });
    function mouseMove(e) {
        var event = e || window.event;
        elem.style.left = event.clientX - disX + 'px';
        elem.style.top = event.clientY - disY + 'px';
    }
    function mouseUp(e) {
        var event = e || window.event;
        removeEvent(document, 'mousemove', mouseMove);
        removeEvent(document, 'mouseup', mouseUp);
    }
}

// 封装异步加载函数
function loadScript(url, callback) {
    var script = document.createElement('script');
    script.type = "text/javascript";
    if(script.readyState) {
        script.onreadystatechange = function() {
            if(script.readyState === "complete" || script.readyState == "loaded") {
                callback();
            }
        }
    } else {
        script.onload = function() {
        // Safari chrome firefox opera
            callback();
        }
    }
    script.src = url;
    document.head.appendChild(script);
}