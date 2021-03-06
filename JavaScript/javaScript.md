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

#### DOM基本操作
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

#### 日期对象Date（）
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
5. 键盘事件
    1. keydown(按键按下任意键), keyup(按键弹起), keypress(按键按下字符键)
    2. 触发顺序是keydown>keypress>keyup
    3. keydown和keypress区别
        * keydown可以响应任意键盘按键，keypress只可以相应字符类键盘按键
            * 检测字符类不准确，keypress检测字符很准。但是keydown能监控所有，包括上下左右都能监控，但是keypress只能监视字符。
            * 用法：如果你想监控字符类按键，并想区分大小写，就用keypress,如果是操作类按键的话，就用keydown(which:39是按键牌号39，还是asc码)
        * keypress返回ASCII码，可以转换成相应字符
    
    **注意**：游戏触发设置在keydown上，机械键盘抬起速度快反馈力量大，对游戏没用
6. 文本操作事件
    1. input：输入框里面所有变化（增删改）都会触发input事件
    2. change: 对比鼠标聚焦，或失去焦点的时，两个状态是否发生改变，如果两个状态没有改变就不触发，如果发生改变就触发
    3. focus, blur聚焦和失去焦点
7. 窗体操作类（window上的事件）
    1. scroll：滚动条滚动触发事件
    2. load：页面加载完成触发事件

    利用了onload就能操作写在下面的div了,但是我们不能这样用？

    **理由**：html和css是一起解析的，在解析的时候会有html有domTree,css有cssTree生成（树形图的顶底是document,然后是html，然后是head,body）,两个树拼在一起是renderTree.什么时候把节点放在树里？dom节点解析，如确定是img标签就把他放到树里。（先解析完img，同时开启一个线程异步的去下载里面的内容，后下载完）。我们把js的script标签写在最下面的好处是，这些刚刚解析完js就能操作页面了，就更快了。而window.onload要等整个页面解析完，下载完才能操作js，才能触发事件（效率很差）。onload能提醒我们什么时候整个页面解析完毕。在设计弹窗广告时，就要用onload，等整个页面下载完了才开始用，但是onload不能用于主程序里面。

### json
JSON是一种传输数据的格式（以对象为样板，本质上就是对象，但用途有区别，对象就是本地用的，json是用来传输的）
1. JSON.parse();    // string ——> json
2. JSON.stringify();    // json ——> string

### 异步加载JS
js是单线程的，会阻断HTML,css加载（因为js会修改html和css一起加载会乱）,所以是同步加载js。先下载js，再下载html和css。常规来说js是同步加载的.
1. js加载的缺点：加载工具方法没必要阻塞文档，过得js加载会影响页面效率，一旦网速不好，那么整个网站将等待js加载而不进行后续渲染等工作。
2. 有些工具方法需要按需加载，用到再加载，不用不加载。
3. javascript异步加载的三种方案
    1. defer异步加载，但要等到dom文档全部解析完(dom树生成完)才会被执行。只有IE能用。dom文档全部解析完，不代表整个页面加载完
    2. async 异步加载，加载完就执行,async只能加载外部脚本，不能把js写在script标签里。ie9以上可以用，w3c标准
    3. 1和2执行时也不阻塞页面
    4. 创建script，插入到DOM中,加载完毕后callBack(按需加载，方便)   // 常用

### js加载时间线
js加载时间线：依据js出生的那一刻起，记录了一系列浏览器按照顺序做的事（就是一个执行顺序）

js时间线步骤（创建document对象——>文档解析完——>文档解析完加载完执行完）
1. 创建Document对象，开始解析web页面。解析HTML元素和他们的文本内容后添加Element对象和Text节点到文档中。这个阶段document.readyState = "loading"。
2. 遇到link外部css，创建线程，进行异步加载，并继续解析文档。
3. 遇到script外部js，并且没有设置async、defer，浏览器同步加载，并阻塞，等待js加载完成并执行该脚本，然后继续解析文档.
4. 遇到script外部js，并且设置async、defer，浏览器创建线程异步加载，并继续解析文档。
对于async属性的脚本，脚本加载完成后立即执行。（异步禁止使用document.write(),因为当你整个文档解析到差不多，再调用document.write(),会把之前所有的文档流都清空，用它里面的文档代替）
5. 遇到img等(带有src)，先正常解析dom结构，然后浏览器异步加载src，并继续解析文档。看到标签直接生产dom树，不用等着img加载完src。
6. 当文档解析完成(domTree建立完毕，不是加载完毕)，document.readyState = 'interactive'。
7. 文档解析完成后，所有设置有defer的脚本会按照顺序执行。（注意与async的不同，但同样禁止使用document.write()）;
8. document对象触发DOMContentLoaded事件，这也标志着程序执行从同步脚本执行阶段，转化为事件驱动阶段。
9. 当所有async的脚本加载完成并执行后、img等加载完成后（页面所有的都执行加载完之后）,document.readyState='complete', window对象触发load事件。
10. 从此，从异步响应方式处理用户输入、网络事件等。

### 正则表达式
1. 课前补充
    1. 转义字符“\”(反斜杠)：现在比如说var str="abcdef";然后我想给字符串里加一个加一个双引号怎么？你不能直接加，直接加系统会识别成语法的，你就加一个转义字符，然后把引号写在后面即可：var str="abcd\"ef",现在你访问str就得到"abcd"ef",就是假如说你想给字符串里加一个特殊符号，而且这个符号还有特殊语法你就给前边加一个转义字符，转义字符的作用就是把它后一位转化为字符串，转义字符自己不会显示的，会和自己的后一位结合在一起。那我想在字符串里打一个转义号var str="abcd\\ef";你再访问str就得到"abcd\ef"。
    <br>
    转义字符串后边还可以跟字母，他配合特殊的字母就会有特殊的语法意义：
    <br>
        1. \n:换行功能，这个n就不代表字符串n了，例如var str="abcd\nef";你再访问str就得到两行的字符串："abcd ef"。但是document.write()这个方法是换不了行的。当文档流输入进去，文档里是识别不了回车的，回车都变成文字分隔符了，必须console.log(str)才可以。
        2. \r:行结束符，代表行结束，你看不出来效果，var str="abcd\r\nef";访问str得："abcd ef"
        3. \t:table功能，制表符缩进，var str="abcd\tef",访问str得到"abcd    ef",继续var str="abcd\t\tef",在访问就得到"abcd      ef",一般一个table代表四个空格。
    2. 多行字符串：比如说我要写一个html结构，在编程的时候让标签直接换行，这样写会报错，而且是低级的语法错误，系统规定字符串是不能多行显示的，但是直接字符串后加上转义字符\就可以，转义字符会把文本形式的回车转义掉，让它不再是回车。
2. 正则表达式RegExp的作用，匹配特殊字符或有特殊搭配原则的字符的最佳选择。
3. 正则表达式的两种创建方式
    1. 直接量： 例如var reg = /abc/
    2. 构造函数创建方法
        ```
        例如
        var reg = new RegExp('abc', 'i');
        var str = 'ABCDE';
        ```
4. 修饰符（就是i、m、g三个属性）
    1. i:匹配时忽视大小写
    2. g:执行全局匹配
        ```
        例如
        var reg = /ab/;
        var str = 'abababab';
        str.match(reg) ['ab']

        var reg = /ab/g;
        var str = 'abababab';
        str.match(reg) ['ab','ab','ab','ab'];
        ```
    3. m:执行多行匹配
        ```
        var reg = /a/g;
        var str = 'abcdea';
        str.match(reg) ['a','a'];

        var reg = /^a/gm;
        var str = 'abcde\na';
        str.match(reg) ['a', 'a'];
        ```
5. 方括号（表达式）
    ```
    var str = '12309u9873snlwkdokg';
    var reg = /[1234567890][1234567890][1234567890]/g;
    str.match(reg) ['123', '987'];

    var reg = /[ab][cd][d]/g;
    var str = 'abcd';
    str.match(reg) [bcd];
    ```
    ```
    var reg = /(abc|bcd)[0-9]/g;
    var str = 'abc2';
    str.match(reg) ['abc2'];
    ```
    小括号也有优先计算的作用，|代表或，正则里是一个竖线，这就代表abc加个数字或bcd加个数字，那么str.match(reg)就得到["abc2"];
6. 元字符
    1. \w: \w也代表一位，他就完全等于[0-9A-z_],0到9，大A到小z,再加下划线。
    2. \W他代表非\w，[^\w]取它的补集
    ```
    var reg = /\wcd2/g;
    var str = 'bcd2';
    str.match(reg) ['bcd2'];

    var reg = /\Wcd2/g;
    var str = /bcd2/;
    str.match(reg) null;
    var str = b*cd2;
    str.match(reg) ['*cd2']
    ```
    3. \d:代表[0-9]
    4. \D:代表[^\d]
    ```
    var reg = /\d\d\d/g
    var str = 123;
    str.match(reg) ['123'];

    var reg = /[\w\d]/g;
    var str = s;
    str.match(reg) [s];
    ```
    5. \n:换行符
    6. \f:换页符
    7. \r:回车符
    8. \t:制表符
    9. \v:垂直制表符
    ```
    var reg = /\tc/g
    var str = abc   cdefgh;
    str.match(reg)  null;
    var str = 'abc\tcdefgh';
    str.match(reg) ['   c'];
    ```
    10. \s:空白字符,能展示空白的一些字符，他的范围是[\t\n\r\v\f],和一个空格。正则表达式里打一个空格就真的是匹配一个空格。
    11. \S:代表[^\s]
    12. \b:单词边界
    13. \B:非单词边界
    ```
    var reg = /\bc/g;
    var str = 'abc cde fgh';
    str.match(reg) ['c'];

    var reg = /\bcde\b/g;
    var str = 'abc cde fgh';
    str.match(reg) ['cde'];
    var str = 'abc cdefgh';
    str.match(reg) ['null'];

    var reg = /\bcde\B/g
    var str = 'abc cdefgh';
    str.match(reg) ['cde'];
    ```
    14. \uXXXX:查找以十六进制xxxx规定的Unicode字符（十六进制从0000到ffff,包含了所有字符，汉字也在里边）
7. 量词
    1. n+: 这个n是变量，可以代表任何东西，+代表这个变量可以重复出现一次到无数。
    2. n*: *代表可以重复出现0次到无数次
        ```
        var reg = /\w+/g;
        var str = 'abc';
        // 这个表示了\w可以出现一次到多次,那么str.match(reg)就得到['abc'],说明了\w出现了三次。

        var reg =/\w*/g;
        var str = 'abc';
        // 这个\w可以表示可以出现0次到多次，str.match(reg)得到['abc', ''],最后有个空串是因为g是全局匹配，因为是*，如果变成0的话，\w0就是没有，正则里就是一个空，所以他匹配了一个空出来。一开始匹配*是3，第二次匹配*就是0了。

        var reg = /\d*/g;
        var str = 'abc';
        // str.match(reg)得到['','','',''],一开始光标在a前边匹配一个空，然后看到a匹配不了，再到b前边再匹配一个空......那么有多少个光标定位点就匹配多少个空，因为最后一个空是逻辑距离匹配出来的。
        那上一个例子中\w为啥不匹配四个空加abc呢？
        他不会那么识别的，一旦\w能识别出值的话，他会一连串先把\w能识别的识别了，到最后*才成0，能匹配多就不匹配少。

        var reg =/\w+/g;
        var str = 'aaaaaaa';
        str.match(reg)就得到['aaaaaaa'],能多就不少，这叫贪婪匹配原则。
        ```
    3. n?: 这个重复出现的范围是0-1次。
        ```
        var reg = /\w?/g;
        var str = 'aaa';
        // str.match(reg)就得到['a', 'a', 'a', ''],最后?变成0，匹配一个空。
        ```
    4. n{x}：就是n要重复出现x次，范围固定。
        ```
        var reg = /\w{3}/g;
        var str = 'aaaaaa';
        str.match(reg);      //['aaa', 'aaa']
        // \w要重复出现3次，三个三个匹配，所以结果为['aaa', 'aaa']
        ```
    5. n{x,y}: n可以重复出现x到y次
        ```
        var reg = /\w{3, 5}/g;
        var str = 'aaaaaaaaaaaaa';
        str.match(reg);     //['aaaaa', 'aaaaa', 'aaa']
        // \w可以重复出现3到5次,所以得到['aaaaa', 'aaaaa', 'aaa'],先匹配5个，最后匹配4个，能多就不少。
        ```
    6. n{x,}：可以重复出现n到无数次。量词是n去乘以这个量词，例如上边的，是\w乘以量词，几个\w。
8. 开头符和结尾符
    1. ^匹配开头
        ```
        var reg =/^abc/g;
        var str = 'abcde';
        str.match(reg); ['abc']
        ```
    2. $匹配结尾
        ```
        var reg =/de$/g;
        var str = 'abcde';
        str.match(reg); ['de']
        ```
    ```
    var reg = /^abc$/g;
    var str = 'abcabc';
    str.match(reg); null
    // abc开头并且以这个abc结尾，所以这个写正则表达式就把字符串限定死了。
    var str = 'abc';
    str.match(reg); ['abc']
    ```

```
写一个正则表达式，检验一个字符串首尾是否含有数字。
var reg = /^\d|\d$/g;
解析：因为题目没有说都,所以首尾有一个地方含有数字就行，中间用个或，两边开头结尾都匹配\d即可。

检验一个字符串首尾是否都含有数字。
var reg = /^\d[\s\S]*\d$/g;
解析：中间得用一个区间出现0到很多次，区间里只要能代表任意字符就行。
```

9. 正则表达式上的属性
    1. global:正则表达式上是否具有标志g，例如上边的，reg.global就是true。
    2. ignoreCase:正则表达式上是否具有标志i。
    3. multiline:正则表达式上是否具有标志m。
    4. source：返回正则表达式的内容。
    5. lastIndex
10. 正则表达式上的方法
    1. test():检测字符串指定的值，返回true或false。
    2. exec():这也是一种匹配方法
    ```
    var reg = /ab/g;
    var str = 'abababab';
    console.log(reg.exec(str)); ['ab', index:0,input:'abababab', groups: undefined]
    console.log(reg.exec(str)); ['ab', index:2,input:'abababab', groups: undefined]
    console.log(reg.exec(str)); ['ab', index:4,input:'abababab', groups: undefined]
    console.log(reg.exec(str)); ['ab', index:6,input:'abababab', groups: undefined]
    console.log(reg.exec(str)); null
    console.log(reg.exec(str)); ['ab', index:0,input:'abababab', groups: undefined]
    // 他每次匹配智能匹配一个'ab',这里边index第一次是0，代表了游标的位置，说明第一次匹配的游标是在第0位，第二次匹配的'ab'游标在第2位，一直调用游标一直往后走，直到走到底6位匹配最后一个之后，你再调用方法的话就是null，继续调用的话游标回到最开始的位置匹配第一个。游标在一圈一圈的转。而游标的位置有一个属性，就是上面提到的reg.lastIndex。

    var reg = /ab/g;
    var str = 'abababab';
    console.log(reg.lastIndex); 0
    console.log(reg.exec(str)); ['ab'，index:0，input:'abababab', groups:undefined]
    console.log(reg.lastIndex); 2
    console.log(reg.exec(str)); ['ab'，index:2，input:'abababab', groups:undefined]
    console.log(reg.lastIndex); 4
    console.log(reg.exec(str)); ['ab'，index:4，input:'abababab', groups:undefined]
    console.log(reg.lastIndex); 6
    console.log(reg.exec(str)); ['ab'，index:6，input:'abababab', groups:undefined]
    console.log(reg.lastIndex); 8
    console.log(reg.exec(str)); null
    console.log(reg.lastIndex); 0
    console.log(reg.exec(str)); ['ab'，index:0，input:'abababab', groups:undefined]
    // 我们可以发现每次reg.exec()执行匹配之后都会自动的把游标后挪，然后当匹配为null的时候把游标又挪到最开始的地方。那么：
    var reg = /ab/g;
    var str = 'abababab';
    console.log(reg.lastIndex); 0
    console.log(reg.exec(str)); ['ab'，index:0，input:'abababab', groups:undefined]
    reg.lastIndex = 0;
    console.log(reg.exec(str)); ['ab'，index:0，input:'abababab', groups:undefined]
    // 我可以通过reg.lastIndex给游标手动的挪到第0位，那么他下一次匹配的还是最开始的'ab'，所以他从哪里开始匹配完全受lastIndex控制，并且我们可以手动控制lastIndex。

    var reg = /ab/;
    var str = 'abababab';
    console.log(reg.lastIndex); 0
    console.log(reg.exec(str)); ['ab', index: 0, input:'abababab', groups: undefined]
    console.log(reg.lastIndex); 0
    console.log(reg.exec(str)); ['ab', index: 0, input:'abababab', groups: undefined]
    // 可以看到游标根本就不动，他永远从第1个开始匹配，匹配不了后边
    ```

    如何匹配一个结构为xxxx的字符串片段？
    ```
    var reg = /(\w)\1\1\1/g;
    var str = 'aaaabbbb';
    str.match(reg); ['aaaa','bbbb'];
    ```
    这里边的小括号还有一个意思叫子表达式，当你把他括起来之后，他会记录里边匹配的内容，然后我们就可以通过\1把他反向引用出来，\1就是反向引用第一个子表达式匹配的内容，就是你\w匹配的东西，我要复制一个一模一样的出来，三个\1就代表后三位的内容必须和第一位完全雷同。

    如何匹配xxyy的形式？
    ```
    var reg = /(\w)\1(\w)2/g;
    var str = 'aabb';
    str.match(reg); ['aabb'];
    // \1引用第一个子表达式的内容，\2就引用第二个子表达式的内容
    var reg = /(\w)\1(\w)2/g;
    var str = 'aabb';
    console.log(reg.exec(str)); ['aabb', 'a', 'b', index: 0, input: 'aabb', groups: undefined]
    ```
11. 支持正则表达式的String对象的方法
    1.  match():找到一个或多个正则表达式的匹配
        ```
        var reg = /(\w)\1(\w)\2/;
        var str = 'aabb';
        console.log(str.match(reg));    ['aabb', 'a', 'b', index: 0, input: 'aabb', groups:undefined]

        var reg = /(\w)\1(\w)\2/g;
        var str = 'aabb';
        console.log(str.match(reg));    ['aabb']
        // 加上g累赘信息全没有
        ```
    2. search():检索与正则表达式相匹配的值，如果匹配不到就返回-1，但凡返回的不是-1都代表可以匹配到。
        ```
        var reg = /(\w)\1(\w)\2/g;
        var str = 'edaabbbbee';
        console.log(str.search(reg));
        console.log(str.search(reg));
        // 此时打印的都是2，他返回的是匹配到的这个位置，他追求的只是能不能匹配到，他不管你匹配多少个，所以加不加g无所谓，但是匹配不到就返回-1。
        ```
    3. split():把字符串分割为字符串数组
        ```
        var reg = /(\w)\1/g;
        var str = 'bntgjzeaasrrykzeasklwslwoigo';
        console.log(str.split(reg));  ["bntgjze", "a", "s", "r", "ykzeasklwslwoigo"]
        // 我们以两个相同字母为界来拆，此时就打印["bntgjze", "a", "s", "r", "ykzeasklwslwoigo"],不好一点的是他会把子表达式的匹配内容一起返回。
        var reg = /f/g;
        var str = 'avfdw';
        console.log(str.split(reg));   ['av', 'dw']  
        ```
    4. replace():替换与正则表达式匹配的字串。
        ```
        var str = 'aa';
        console.log(str.replace('a', 'b')); ba
        // 传两个参数，意思是把a替换成b，此时就打印ba
        var reg = /a/;
        var str = 'aa';
        console.log(str.replace(reg, 'b')); ba
        // 打印ba,因为正则表达式没加g
        var reg = /a/g;
        var str = 'aa';
        console.log(str.replace(reg, 'b')); bb
        ```
    如何把xxyy转换为yyxx?
    ```
    var reg = /(\w)\1(\w)\2/g;
    var str = 'aabb';
    console.log(str.replace(reg, '$2$2$1$1'));  bbaa
    // 先把xxyy的形式用正则表达式写出来，然后在正则表达式传入第一个参数，匹配到了之后，第二个参数也得是字符串，这里边也有一个方法可以反向引用正则表达式里子表达式里匹配的内容，$1引用的是第一个子表达式里匹配的内容，$2引用的是第二个，然后把它拼在一起。
    var reg = /(\w)\1(\w)\2/g;
    var str = 'aabb';
    console.log(str.replace(reg, function($, $1 $2){
        return $2 + $2 + $1 + $1;
    }));
    // 里边第二个参数直接传function, 这个function系统会帮我们调用，最后返回一个字符串即可。系统会传几个参数进去，我们得用形参接收。第一个参数是正则表达式匹配结果，第二个参数是第一个子表达式匹配的内容，第三个参数是第二个子表达式匹配的内容，我们最后把他们拼在一起即可。
    ```
    5. toUpperCase(): 把字符串转换为大写
        ```
        var str = 'aabb';
        str.toUpperCase();  AABB
        ```
    6. toLowerCase(): 把字符串转换为小写
        ```
        var str = 'aabb';
        str.toUpperCase().toLowerCase();   aabb
        ```
    把the-first-name变成小驼峰式大写
    ```
    var reg = /-(\w)/g;
    var str = 'the-first-name';
    console.log(str.replace(reg, function($, $1){
        return $1.toUpperCase();
    }))
    解析：我们只需要把-f变成F, -n变成N即可，那么先定义正则表达式把-f和-n选出来，我们把f和n那一位装到子表达式里，然后用replace替换，现在都选出来了，然后替换成子表达式的大写即可，现在就打印theFirstName。
    注意：reg找了几次function就执行几次
    ```
12. 正向预查（正向断言）
    ```
    var reg = /a(?=b)/g;
    var str = 'abaaaa';
    str.match(reg); ['a']
    // 现在要找a，但是有条件，要找的是后边紧跟着b的那个a，就可以这么写，这里边b只是起到修饰的作用，不参与选择。
    var reg = /a(?!b)/g;
    var str = 'abaaaaaa';
    str.match(reg); ["a", "a", "a", "a", "a", "a"]
    这就是找的a必须是后边没有紧跟着b的a
    ```
13. 非贪婪匹配：贪婪匹配是能多就不少，非贪婪匹配就是能少就不多，只需要在量词后边加上？即可成为非贪婪匹配。
    ```
    var reg = /\w+?/g;
    var str = 'aaa';
    str.match(reg); ['a', 'a', 'a']

    var reg = /\w??/g;
    var str = 'aaa';
    str.match(reg); ['', '', '']
    // 这里第一个？是量词，第二个？是转为非贪婪匹配
    ```
14. 补充
    1. 你要匹配空格就直接在正则表达式里敲空格即可。
        ```
        var reg = / /g;
        var str = 'a aa';
        str.match(reg); [' ']
        ```
    2. 如果你用replace()想把里边的内容替换成$的话必须在前边再加一个$，因为单个是有语法含义。
    3. 正则表达式里的｜如果不加括号就代表前边一个或，后边一个或。
    4. 正则表达式里如果想匹配\、？、+、*、（）等有语法含义的，前边必须加转义符号\。
```
var reg = /(\w)\1*/g;
var str = 'aaaaaabbbbbccccc';
console.log(str.replace(reg, '$1'));    abc
// 先把他选出来，正则里*是\1的量词，所以他选出来了一片同样的字符，然后替换成第一个子表达式里匹配的内容即可。加上g就都替换了，打印abc。
```
```
var str = '100000000';
var reg = /(?=(\B)(\d{3})+$)/g;
console.log(str.replace(reg, '.'));     100.000.000
//  首先得是从后往前，思路是先找空，什么样的空，从后往前每隔三位的那个空，所以得用正向预查修饰这个空，正向预查的括号前边啥都不写就代表空，然后括号里$代表以什么结尾，也就是从后往前查的意思，\d{3}代表三位数，+代表出现了一次到多次，所以这就把空修饰好，得再加一个修饰\B,必须是非单词边界，现在把这个空替换成.
```

