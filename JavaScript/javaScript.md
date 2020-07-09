### DOM
* 增
<br>
    document.createElement(); 创建元素节点
    <br>
    document.createTextNode(); 创建文本节点
    <br>
    document.createComment(); 创建注释节点
    <br>
    document.createDocumentFragment();  创建文档碎片节点
    <br>
    ```
    var div = document.createElement('div');
    var text = document.createTextNode('邓宝宝');
    var comment = document.createComment('this is Comment');
    ```

* 插
<br>
    PARENTNODE.appendChild(); 可以理解为push
    <br>
    ```
    var div = document.createElement('div');
    document.body.appendChild(div);
    var text = document.createTextNode('邓宝宝');
    var span = document.createElement('span');
    div.appendChild(text);
    div.appendChild(span);
    var text1 = document.createTextNode('demo');
    span.appendChild(text1);
    span.appendChild(text);
    ```
    <br>
    PARENTNODE.insertBefore(a, b);一定是div先insert a，before b
    ```
    var strong = document.createElement('strong');
    div.insertBefore(strong, span);
    var i = document.createElement('i');
    div.insertBefore(i, strong);
    ```

* 删
<br>
    parent.removeChild(); 就是把它进行了剪切操作
    child.remove(); 自尽，完全删除
    <br>
    ```
    div.removeChild(i);
    i.remove();
    ```
    
* 替换
<br>
    parentNode.replaceChild(new, origin);   用新的new去置换旧的origin
    <br>
    ```
    var p = document.createElement('p');
    div.replaceChild(p, strong);
    // 不过strong标签还存在，只不过是被剪切
    ```

### DOM基本操作
* element节点的一些属性
<br>
    innerHTML
    <br>
    innerText(火狐不兼容)/textContent(老版本IE不好使)
* Element节点的一些方法
<br>
    ele.setAttribute()
    <br>
    ele.getAttribute()

### 日期对象Date（）
日期对象，是系统提供好的
<br>
var date = new Date()大写的Date是系统提供的一个构造函数，通过new Date的方法会给我们返回一个对象，这个对象就是一个日期对象。日期对象有很多属性和方法。小的date代表此时此刻的时间。用小的date调用方法，如date.getDate()

* Date对象属性

* Date对象方法
    <br>
    Date():返回当日的日期和时间
    <br>
    getDate():从Date对象返回一个月中的某一天（1~31）
    <br>
    getDay():从Date对象返回一周中的某一天（0~6)
    <br>
    getMonth():从Date对象返回月份(0~11)
    <br>
    getFuYear():从Date对象以四位数字返回年份
    <br>
    getHours():返回Date对象的小时（0~23）
    <br>
    getMinutes():返回Date对象的分钟（0~59）
    <br>
    getSeconds()：返回Date对象的秒数（0~59）
    <br>
    getMilliseconds():返回Date对象的毫秒（0~999）
    <br>
    getTime():返回1970年1月1日（计算机纪元时刻）至今的毫秒数
    <br>
    setDate():设置Date对象中月的某一天（1~31）
    <br>
    setMonth():设置Date对象中月份（0~11）
    <br>
    setFullYear():设置Date对象中的年份（四位数字）
    <br>
    setHours():设置Date对象中的小时（0~23）
    <br>
    setMinutes(): 设置Date对象中的分钟(0~59)
    <br>
    setSeconds(): 设置Date对象中的秒钟(0~59)
    <br>
    setMilliseconds(): 设置Date对象的毫秒（0~999）
    <br>
    setTime(): 以毫秒设置Date对象
    <br>
    toString(): 把Date对象转换为字符串
    <br>
    toTimeString(): 把Date对象的时间部分转换为字符串
    <br>
    toDateString(): 把Date对象的日期部分转换为字符串
    <br>
<br>
* 定时器
    * setInterval():定时器
        <br>
        setInterval(function() {},1000);指每隔1000毫秒执行一次这个函数
        <br>
        如果先定义1000毫秒，在后面改成2000毫秒，程序仍按1000毫秒执行，因为它只识别一次，不能通过改变time来改变setInterval的快慢 
        <br>
        ```
        var time = 1000;
        setInterval(function(){
            console.log('a');
        }, time);
        time = 2000;
        ```
        <br>
        setInterval 计算时间非常不准

        ```
        var firstTime = new Date().getTime();
        setInterval(function() {
            var lastTime = new Date().getTime();
            console.log(lastTime - firstTime);
            firstTime = lastTime;
        }, 1000);
        ```

        <em> 注意</em>：setInterval();是 window 的方法，在全局上就算不写 window. setInterval();他也会上全局的 GO 里面查找，所以不写 window.也行。每一个 setInterval();都会返回一个一个数字，作为唯一的标识，有唯一标识就可以把他清除掉（利用 clearInterval 清除)
    <br>
    * clearInterval():能让setInterval停止

        ```
        var i = 0;
        var timer = setInterval(function() {
            console.log(i++)
            if(i > 10 ) {
                clearInterval(timer);
            }
        }, 10);
        ```

    * setTimeout():真正的定时器，隔了一段时间后再执行（起推迟作用），并且只执行一次

        ```
        setTimeout(function() {
            console.log('a');
        }, 1000);
        ```

    * clearTimeout() 清除setTimeout();让它停止执行

        ```
        var timer = setTimeout(function() {
            console.log('a');
        }, 1000);
        clearTimeout(timer);
        这种写法，setTimeout()还没执行就被清除了，执行不了
        ```

    timer1=setTimeout()返回的唯一标识和setInterval返回的唯一标识是不会重叠的，他们两个是依次有序的

    ```
    var timer1 = setTimeout(function() {
    }, 1000);
    // timer1 = 1
    var timer2 = setInterval(function() {
    }, 1000);
    // timer2 = 2
    ```

    setInterval();setTimeout();clearInterval();clearTimeout();这四个都是全局对象，都是window上的方法，内部函数this指向window
    <br>
    setInterval('func()',1000)和setTimeout();都有另一种形式展现，里面可以写成字符串，例如“setInterval("console.log('a');", 1000),意思是1000毫秒执行一次console.log”。但是一般用function(){}

### BOM
* 查看滚动条的滚动距离
    * window.pageXOffset：横向滚动条滚动距离
    <br>
    pageYOffset：纵向滚动条滚动距离
    <br>
    IE8及IE8以下不兼容
    * document.body.scrollLeft,
    <br>
    documentElement.scrollLeft: 横向滚动条滚动距离
    * document.body.scrollLeft,
    <br>
    documentElement.scrollLeft: 纵向滚动条滚动距离
* 查看视口的尺寸
    * window.innerWidth/innerHeight  
        IE8及IE8以下不兼容
        <br>
    *注意渲染模式：*   
        - 1 标准模式：<！DOCTYPE html>是 html5 的
        - 2 怪异/混杂模式：试图去兼容之前的语法，去掉<！DOCTYPE html>这一行即可开启（向后兼容）
        - 3 document.compatMode 是用于判断是怪异模式还是标准模式的，如果是标准模式则返回"CSS1Compat",否则返回BackCompat(怪异模式向后兼容)
    * document.documentElement.clientWidth/clientHeight
        标准模式下，任意浏览器都兼容
    * document.body.clientWidth/clientHeight
        适用于怪异模式下的浏览器

* 查看元素的几何尺寸
    * domEle.getBoundingClientRect();
    * 兼容性很好
    * 该方法返回一个对象，对象里面有left,top,right,bottom等属性。left和top代表该元素左上角的x和Y坐标，right和bottom代表元素右下角的X和Y
    * height和width属性老版本IE并未实现
    * 返回的结果并不是"实时的"
* 查看元素的尺寸
    * dom.offsetWidth, dom.offsetHeight
    所得值是视觉上的尺寸，是包括了 padding
* 查看元素的位置
    * dom.offsetLeft, dom.offsetTop
        对于无定位父级的元素，返回相对文档的坐标。对于有定位父级返回相对于最近的有定位的父级的坐标
    * dom.offsetParent
        返回最近的有定位的父级，如无，返回body,body.offsetParent返回null
* 让滚动条滚动
    * window上有三个方法scroll(), scrollTo(),两个功能一样;scrollBy(),累加滚动距离
        * scroll(x, y),scrollTo(x, y),功能是一样的，里面能填两个参数
        * scroll(x轴滚动条的距离, y轴滚动条的距离)，里面的xy可以填负数
        * scrollBy(x, y)是累加滚动距离，填负数就往上滚动
    * 三个方法功能类似，用法都是将x,y坐标传入。即实现让滚轮滚动到当前位置。
    * 区别：scrollBy()会在之前的数据基础之上做累加

### 脚本化CSS
* 读写元素CSS属性：dom.style.prop 只有这个可读可写，其余只能读
    * 可读写行间样式，没有兼容性问题，碰到float这样的保留字属性，前面应加css
    <br>
    eg:float——> cssFloat

    ```
        div.style.float => div.style.cssFloat
    ```

    * 复合属性尽量拆解，组合单词变成小驼峰式写法

    ```
        div.style.border="2px solid black";
        可以转换成
        div.style.borderWidth="5px";
        div.style.borderStyle="double"
    ```

    * 写入的值必须是字符串格式
* 查询计算样式：window.getComputedStyle(ele,null)
    * 原生底层方法，window.getComputedStyle不管填不填都有值，这里面的值都是默认值，这会获取的是这个当前元素所展现出的一切CSS属性的显示值（显示值是你最终看到的值）
    * window.getComputedStyle(ele, null);括号里面要填两个参数，第一个ele是填的是你要获取谁，第二个参数先填写null(如果需要获取伪元素，第二个参数则填写伪元素)

    ```
    例：获取伪元素方法
    var div = document.getElementsByTagName('div')[0];
    window.getComputedStyle(div, "after")[prop]
    ```

    * 计算样式只读
    * 返回的计算样式的值都是绝对值，没有相对单位
    * IE8及IE8以下不兼容
* 查询样式：ele.currentStyle
    * 计算样式只读
    * 返回的计算样式的值不是经过转换的绝对值
    * IE独有的属性
* 查找操作样式表：document.styleSheets
    * 该属性存储了一个html文档里面的所有CSS样式表的集合

### 事件
是一个动作，没效果也是事件，它是交互体验的核心功能

#### 绑定事件
* ele.onxxx = function(event){}
    * 兼容性很好，但是一个元素只能绑定一个事件处理程序

    ```
    例:div.onclick = function(){}
    div.onclick就叫做可以被点击的事件（绑定事件类型）,function(){}是反馈，一旦事件被触发，就要执行function里面的函数（绑定的是一个事件处理函数）
    div.onclick=function(){
        console.log('a');
    }
    div.onclick = function(){
        console.log('b');
    }
    b生效，b覆盖了a,这是赋值的原因
    ```
    * 基本等同于写在HTML行间上
    ```
    <div style="width: 100px;height: 100px;background-color: red;" onclick="console.log('a')"></div>
    <script>
    var div = document.getElementsByTagName('div')[0];
    /* div.onclick = function() {
        console.log('this is onClick');
    } */
    </script>
    onclick="console.log('a')"是句柄的绑定方式，写在行间不用写function(){}
    ```
    * 程序this指向是dom元素本身
* obj.addEventListener(type,fn,false)里面可以填三个参数
    * div.addEventListener('事件类型'，处理函数， false)
    * IE9以下不兼容，可以为一个事件绑定多个处理程序
    *注意*：obj.addEventListener不能给同一个函数绑定多次，重复的绑定一个函数就不能用了
    * 程序this指向是dom元素本身
* obj.attachEvent('on'+type,fn);
    * div.attachEvent('on'+事件类型，处理函数)
    * IE独有，一个事件同样可以绑定上处理多个处理程序
    * 程序this指向window

#### 解除事件处理程序
* ele.onclick = false/''/null;
    * 解除ele.onXXX = function(event) {}
    ```
    div.onclick = function () {
        console.log('onclick');
        this.onclick = null;
    }
    ```
* ele.removeEventListener(type,fn, false)
    * 解除addEventListener(type, fn, false)
* ele.detachEvent('on'+type, fn)
    * obj.attachEvent('on'+type, fn)
*注*若绑定匿名函数，则无法解除

#### 事件处理模型
事件处理的两个模型：事件冒泡、捕获（不能同时存在）
1. 事件冒泡：
    * 结构上（非视觉上）嵌套关系的元素，会存在事件冒泡的功能，即同一事件，自子元素冒泡向父元素。（自底向上）
    结构上存在父子元素的元素，如果点击到子元素，会一级级向父元素传递这个事件（从代码的角度是自底向上一层层冒泡的）
2. 事件捕获：
    1. 结构上（非视觉上）嵌套关系的元素，会存在事件捕获的功能，即同一事件，自父元素捕获至子元素（事件源对象）。（自底向上）
    2. IE没有捕获事件

***注意***
一个对象的一个事件类型，只能存在一个事件处理模型（冒泡或捕获）
```
obj.addEventListener(type,fn,true);
// 第三个参数为true就是事件捕获
```
3. 触发顺序，先捕获，后冒泡
    1. 同一个对象的一个事件处理类型，上面绑定了两个事件处理，分别执行事件冒泡和事件执行
4. focus, blur, change, submit, reset, select等事件不冒泡

#### 取消冒泡和阻止默认事件
在每一个事件处理函数中【div.onclick=function(){}】,我们可以写一个形参(如e),系统可以传递事件对象（记载了数据发生时的状态和信息）到这个参数里面去
1. 取消冒泡
    1. W3C标准 event.stopPropagation(); //但不支持ie9以下版本
    2. IE独有event.cancelBubble = true;
2. 阻止默认事件
    1. 默认事件（表单提交，a标签跳转，右键菜单等）
    2. return false;兼容性非常好，以对象属性的方式注册的事件才生效（这是句柄的方式阻止默认事件，只有句柄的方式绑定事件才好使）
    ```
    ele.onxxx = function(event) {}
    // 是句柄的绑定方式，才能用return false
    ```
    3. event.preventDefault(); // W3C标准，IE9以下不兼容
    4. event.returnValue = false; // 兼容IE
    5. 封装阻止默认事件的函数 cancelHandler(event);

#### 事件对象
非ie浏览器会把事件对象（记载了数据发生时的状态和信息）打包传到参数里面去。ie浏览器在window.event里面储存事件对象。
1. event || window.event 
    1. window.event用于IE,event只能用于非IE浏览器

触发事件的地方叫事件源

2. 事件源对象：(找事件源对象的方法)
    1. event.target // 火狐独有的
    2. event.srcElement // IE独有的

#### 事件委托
利用事件冒泡，和事件源对象进行处理

* 优点
    1. 性能：不需要循环所有的元素一个个绑定事件
    2. 灵活：当有新的元素时不需要重新绑定事件

***面试问题***：什么是事件捕获？
一个是冒泡，一个是捕获obj.addEventListener(type, fn, true);他所说的第二种捕获不是事件处理模型，而是一种真实的事件获取的过程，用于解决拖拽鼠标出方块的问题.
仅在ie好使，利用div.setCapture();会捕获页面上发生的所有事情，都获取到自己身上。对应的用div.releaseCapture();释放。但是方法比较老旧，一般不用。

#### 事件分类
1. 鼠标事件（不需要小驼峰和大驼峰）
    * click(点击)、mousedown(鼠标按下)、mouseup()、contextmenu(右键菜单)、mousemove(鼠标移动事件)、mouseover(鼠标)、mouseout、mouseenter、mouseleave。
2. 用button来区分鼠标的按键
    * 只有mouseup、mousedown两个能区分鼠标垫左右键
    * button返回值，右键是0，左键是2，中间是1
3. DOM3标准规定：click事件只能监听左键，只能通过mousedown和mouseup来判断鼠标
4. 移动端onmousedown不能用，只能用touchstart,touchmove,touchend