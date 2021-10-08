# TypeScript概述
基础+进阶，每个部分搭配项目实战

## 为什么要学习TypeScript

- 就业 或 获得更大的竞争优势
- 获得更好的开发体验
- 解决JS中一些难以处理问题

### JS开发中的问题

- 使用了不存在的变量、函数和成员
- 把一个不确定的类型当作一个确定的类型处理
- 在使用null或undefined的成员

### js的原罪

- js语言本身的特性，决定了该语言无法适应大型的复杂的项目
- 弱类型：某个变量，可以随时更换
- 解释性：错误发生的时间，是在运行时

前端开发中，大部分的时间都是在排错

## TypeScript

简称TS

TypeScript是JS的超集， 是一个可选的，静态的类型系统

- 超集

整数、 正整数， 整数是正整数的超集

- 类型系统

对代码所有的标识符 (变量、函数、参数、返回值)进行类型检查

- 可选的

学习曲线非常平滑.

- 静态的(在运行之前)

无论是浏览器环境，还是node环境，无法直接识别ts代码

> babel: es6 -> es5

> tsc: ts -> es

tsc: ts编译器

静态：类型检查发生的时间，在编译的时候，而非运行时

TS不参与任何运行时的类型检查

**TS的常识**

- 2012年微软发布
- 安德斯·海尔斯伯格（Anders Hejlsberg）负责开发TS项目
- 开源、拥抱ES标准
- 目前版本3.4
- 官网: http://www.tyescriptlang.org/

> 中文网：https://www.tslang.cn/ 个人翻译


**额外的惊喜**

有了类型检查，增强了面对对象的开发

js中也有类和对象，js支持面向对象开发。没有类型检查，很多面向对象的场景实现起来有诸多问题。

使用TS后，可以编写完善的面向对象代码。

## 在node中搭建TS开发环境

### 安装TypeScript

默认情况下，TS会做出下面几种假设

1、假设当前的执行环境是dom
2、如果代码中没有使用模块化语句(import、export)，便认为该代码是全局执行
3、编译的目标是ES3

有两种方式更改以上假设：
1、使用tsc命令行的时候，加上选项参数
2、使用ts配置文件，更改编译选项

### TS的配置文件

生成方式
1、在文件夹中直接新建tsconfig.json文件
2、在命令行中输入"tsc --init"

使用了配置文件后，使用tsc进行编译时，不能跟上文件名，如果跟上文件名，会忽略配置文件。

@types/node

@types是一个ts官方的类型库，其中包含了很多对js代码的类型描述。

> JQuery: 用js写的，没有类型检查
> 安装@types/jquery,为jquery库添加类型定义

### 使用第三方库简化流程

ts-node: 将ts代码在内存中完成编译，同时完成运行

> npm i ts-node/npm i -g ts-node(全局安装)

nodemon:用于检测文件的变化

> npm i nodemon/npm i -g nodemon(全局安装)
如何运行nodemon
> nodemon --exec ts-node src/index.ts


## 基本类型约束

> TS是一个可选的静态的类型系统

### 如何进行类型约束

变量、函数的参数、函数的返回值位置```:类型```

ts在很多场景中可以完成类型推导

any:表示任意类型，对该类型，ts不进行类型检查

> 小技巧，如何区分数字字符串和数字，关键看怎么读?
> 如果按照数字的方式朗读，则为数字；否则为字符串。

### 源代码和编译结果的差异

编译结果中没有类型约束信息

## 基本类型

#### number:数字
#### string:字符串
#### boolean: 布尔
#### 数组

第一种，可以在元素类型后面接上 []，表示由此类型元素组成的一个数组：
> let list: number[] = [1, 2, 3];

第二种方式是使用数组泛型，Array<元素类型>：
> let list: Array<number> = [1, 2, 3];
#### object:对象
#### null 和 undefined
null和undefined是所有其他类型的子类型, 它们可以赋值给其他类型。
> let str:string = undefined
> let num:number = null

但是如果执行```str.toUpperCase```会出现错误,可以在tsconfig.json中设置严格约束模式```"strictNullChecks":  true```可以获得更严格的空类型检查，null和undefined只能赋值给自身。

## 其他常用类型
#### 联合类型
#### void类型
#### never类型
#### 字面量类型
#### 元祖类型(Tuple)
#### any类型

