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
function addevent(elem, type, handle) {
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