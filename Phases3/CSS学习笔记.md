# CSS 学习笔记
## 基本概念
### 一、CSS 基础概念
CSS 层叠样式表，负责页面美化、布局、配色、动画交互视觉。

### 二、三种引入方式
行内样式、内部style标签、外部CSS文件

### 三、基础选择器
标签选择器、类选择器.class、ID选择器#id、后代层级选择器

### 四、核心布局知识点
- display：block / inline / flex / grid
- flex 弹性布局：居中、横向排列
- grid 网格布局：多宫格整齐排列

### 五、视觉美化常用
- color 文字色、background背景/渐变
- border-radius 圆角
- box-shadow 阴影分层
- opacity 透明度
- backdrop-filter 毛玻璃模糊效果

### 六、定位系统
- position: relative 相对定位
- position: fixed 固定定位（悬浮按钮常用）

### 七、进阶动效与交互
- :root 全局CSS变量，统一主题配色
- :hover 鼠标悬浮伪类
- transition 过渡动画，变化顺滑
- @keyframes + animation 自定义帧动画
- 滚动条样式美化
---
## 知识点
一、CSS 基础语法
```
/* 注释 */
选择器 {
  属性: 值;
  属性: 值;
}

/* 引入方式 */
/* 1. 行内样式 */
/* <div style="color:red;"></div> */

/* 2. 内部样式表 */
<style>
  写在这里
</style>

/* 3. 外部样式表 */
/* <link rel="stylesheet" href="style.css"> */
```

二、选择器（最常用）
```
/* 1. 标签选择器 */
div {}
p {}
span {}
ul {}

/* 2. 类选择器 */
.box {}
.title {}

/* 3. ID 选择器 */
#header {}
#main {}

/* 4. 通配符 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* 5. 后代选择器 */
div p {}
.box .item {}

/* 6. 子代选择器 */
div > p {}

/* 7. 并集选择器 */
div, p, span {}

/* 8. 交集选择器 */
p.red {}
div.box {}

/* 9. 相邻兄弟 */
div + p {}

/* 10. 所有兄弟 */
div ~ p {}

/* 11. 属性选择器 */
input[type="text"] {}
div[class^="box"] {} /* 以box开头 */
div[class$="box"] {} /* 以box结尾 */
div[class*="box"] {} /* 包含box */

/* 12. 伪类 */
a:link {}     /* 未访问 */
a:visited {}  /* 已访问 */
a:hover {}    /* 鼠标悬浮 */
a:active {}   /* 点击时 */
input:focus {}/* 聚焦 */

/* 13. 结构伪类 */
ul li:first-child {}
ul li:last-child {}
ul li:nth-child(2) {}
ul li:nth-child(odd) {}  /* 奇数 */
ul li:nth-child(even) {} /* 偶数 */
ul li:nth-child(3n) {}   /* 3的倍数 */

/* 14. 伪元素 */
div::before {
  content: "";
}
div::after {
  content: "";
}
p::first-line {}
p::first-letter {}
```

三、文字与文本样式
```
/* 字体 */
font-family: "Microsoft Yahei", sans-serif;
font-size: 16px;
font-weight: bold; /* 100-900 */
font-style: italic;

/* 颜色 */
color: red;
color: #ff0000;
color: rgb(255,0,0);
color: rgba(255,0,0,0.5);

/* 文本 */
text-align: left/center/right/justify;
line-height: 24px; /* 垂直居中常用 */
text-indent: 2em;   /* 首行缩进 */
text-decoration: none/underline/line-through;
letter-spacing: 2px;
word-spacing: 4px;
white-space: nowrap; /* 不换行 */
overflow: hidden;
text-overflow: ellipsis; /* 省略号 */
```
四、盒子模型
```
/* 标准盒模型：总宽 = width + padding + border + margin */
/* 怪异盒模型：总宽 = width（包含padding/border） */

/* 开启怪异盒模型 */
* {
  box-sizing: border-box;
}

/* 内容区 */
width: 200px;
height: 200px;

/* 内边距 */
padding: 10px;
padding-top: 5px;
padding-right: 10px;
padding-bottom: 5px;
padding-left: 10px;

/* 边框 */
border: 1px solid #000;
border-width: 1px;
border-style: solid/dashed/dotted;
border-color: red;
border-radius: 8px; /* 圆角 */
border-radius: 50%;  /* 圆形 */

/* 外边距 */
margin: 10px;
margin-top: 20px;
margin: 0 auto; /* 水平居中 */
```

五、元素显示模式
```
/* 块级元素：div p h ul ol li */
display: block;

/* 行内元素：span a em strong */
display: inline;

/* 行内块：input img button */
display: inline-block;

/* 隐藏元素 */
display: none; /* 不占位置 */
visibility: hidden; /* 占位置 */
opacity: 0; /* 透明，占位置 */
```
六、背景样式
```
background-color: pink;
background-image: url(images/bg.jpg);
background-repeat: no-repeat/repeat-x/repeat-y;
background-position: center top;
background-size: cover/contain/100% 100%;
background-attachment: fixed; /* 背景固定 */

/* 复合写法 */
background: pink url(.) no-repeat center center / cover;
```
七、浮动 float（布局神器）
```
float: left;
float: right;

/* 清除浮动 */
/* 方法1：额外标签法 */
.clear {
  clear: both;
}

/* 方法2：伪元素清除法（最常用） */
.clearfix::after {
  content: "";
  display: block;
  clear: both;
  height: 0;
  visibility: hidden;
}
.clearfix {
  *zoom: 1;
}
```
八、定位 position
```
/* 静态定位（默认） */
position: static;

/* 相对定位 */
position: relative;
top: 10px;
left: 10px;

/* 绝对定位 */
position: absolute;
top: 0;
left: 0;

/* 固定定位 */
position: fixed;
bottom: 20px;
right: 20px;

/* 粘性定位 */
position: sticky;
top: 0;

/* 层级 */
z-index: 999; /* 仅定位元素有效 */
```
九、布局常用技巧
```
/* 水平居中 */
/* 行内/行内块：text-align: center; */
/* 块级：margin: 0 auto; */
/* 绝对定位：left:50%; transform:translateX(-50%); */

/* 垂直居中 */
/* 单行文本：line-height = height */
/* 绝对定位：top:50%; transform:translateY(-50%); */
/* 弹性盒子：align-items:center; */

/* 水平垂直居中 */
position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);
```
十、Flex 弹性布局（现代必学）
```
/* 父容器 */
.container {
  display: flex;
  /* 主轴方向 */
  flex-direction: row/column/row-reverse/column-reverse;
  /* 换行 */
  flex-wrap: nowrap/wrap/wrap-reverse;
  /* 主轴对齐 */
  justify-content: flex-start/center/flex-end/space-between/space-around/space-evenly;
  /* 侧轴对齐 */
  align-items: flex-start/center/flex-end/stretch;
  /* 多行对齐 */
  align-content: flex-start/center/space-between;
}

/* 子元素 */
.item {
  flex: 1; /* 占剩余空间*/
  align-self: center; /* 单独对齐 */
   order: 1; /* 排序 */
 }
 ```
 十一、阴影、过渡、变形
 ```
 /* 盒子阴影 */
 box-shadow: 0 0 10px rgba(0,0,0,0.2);
 /* 文字阴影 */
 text-shadow: 2px 2px 4px #000;
 /* 过渡 */
 transition: all 0.3s ease;
 /* 变形 */
 transform: translate(50px, 50px);
 transform: scale(1.2);
 transform: rotate(45deg);
 transform: skew(10deg);
 transform-origin: center;
```
十二、常用小技巧
 ```
 /* 鼠标样式 */
 cursor: pointer;
 cursor: move;
 cursor: not-allowed;
 /* 轮廓线 */
 outline: none;
 /* 溢出处理 */
 overflow: hidden;
 overflow: auto;
 overflow: scroll;
 /* 透明度 */
 opacity: 0.5;
 /* 最大最小宽高 */
 max-width: 1200px;
 min-width: 320px;
 /* 图片自适应 */
 img {
   width: 100%;
   height: auto;
   display: block;
 }
 /* 清除默认样式 */
 ul {
   list-style: none;
 }
 a {
   text-decoration: none;
   color: inherit;
 }
 input, button {
   border: none;
   outline: none;
 }
```