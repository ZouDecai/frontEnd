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