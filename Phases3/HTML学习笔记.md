# HTML学习笔记
## 谷歌浏览器安装与调试
- 设置为默认浏览器
- 调试开发：右键 --> 选择"检查"(F12) -->出现对话框，里面有相应代码 --> 左上方框小按钮 --> 可选择不同部分的代码 --> 右侧三个点，可调整代码位置(左HTML，右CSS)

## HTML初体验
1. 创建项目文件夹
  - 存放所有相关素材，也称为根目录
2. 快速编写代码
  - 可通过编译器trea自带的**Emmet**语法
3. 浏览器预览
  - 通过**live Server**直接预览

## 什么是HTML
超文本标记语言---HyperText Markup Language，是一种用来告知浏览器如何组织页面的标记语言。

知识点：
1. 标记也称为标签(元素)
2. 大小写都可以，建议小写
3. HTML由一系列标签组成

## 网页基本结构
 ```html
 <!DOCTYPE html> <!-- 声明文档类型，告诉浏览器这是HTML5 -->
 <html lang="zh-CN"> <!-- 根标签，包含页面中所有内容，lang指定语言，en代表英语，zh-CN代表中文 -->
 <head> <!-- 头部：存放元数据、样式、标题等 -->
     <meta charset="UTF-8"> <!-- 指定字符编码，包含绝大多数人类书面语言的大多数字符，防止乱码 -->
     <meta name="viewport"
     content="width=device-width, initial-scale=1.0"> <!-- 响应式适配 ，确保网页在移动设备上以最佳状态呈现，提升用户浏览体验-->
     <title>页面标题</title><!--也就是浏览器标签中的内容-->
 </head>
 <body> <!-- 主体：存放网页可见内容 -->
     <!-- 网页内容 -->
 </body>
 </html>
 ```

## 标签语法
 ```
 <h1>标题内容</h1> 
 ```  
 - 组成：```<h1>```为开始标签  
        ```</h1>```为结束标签  
        中间内容
 - 分类：大部分双标签，少数单标签     
 例：```<hr>```表示一条水平线

## 标签关系
1. 并列关系(兄弟关系)
```
<head></head>
<body></body>
```
2. 嵌套关系(父子关系)
```
<head>
    <title></title>
</head>
```

## HTML5 标准文档结构
 - `<!DOCTYPE html>`：声明HTML5，浏览器标准模式解析
 - `<html lang="zh-CN">`：根标签+页面语言声明
 - `<head>`：头部元数据，不可见配置
   - `<meta charset="UTF-8">` 防中文乱码
   - `<meta name="viewport">` 移动端适配
   - `<title>` 网页标题
 - `<body>`：所有可视内容、交互元素容器
 
 ## 常用标签分类
 ### 1. 文本标题类
  ```
  <!-- h1~h6 是六级标题，h1 最大，h6 最小，一个页面建议只写1个 h1 -->
<h1>这是一级标题（页面主标题）</h1>
<h2>这是二级标题（章节标题）</h2>
<h3>这是三级标题（小节标题）</h3>
<h4>这是四级标题</h4>
<h5>这是五级标题</h5>
<h6>这是六级标题</h6>

<!-- 文本段落与行内容器 -->
<p>这是一个段落标签，会自动换行，块级元素，独占一行</p>
<span>这是行内小容器，不换行，用于包裹行内文本、添加样式</span>

<!-- 文本换行与分割线 -->
<br> <!-- 强制换行，单标签，无闭合 -->
<hr> <!-- 水平分割线，单标签，用于分隔内容 -->

<!-- 文本格式化标签（语义化，比直接用 span 更规范） -->
<strong>加粗（强调语义，SEO友好）</strong>
<b>加粗（仅样式，无语义）</b>
<em>斜体（强调语义）</em>
<i>斜体（仅样式，常用于图标）</i>
<u>下划线</u>
<del>删除线</del>
<sup>上标（如 2<sup>2</sup>）</sup>
<sub>下标（如 H<sub>2</sub>O）</sub>
<mark>高亮标记</mark>
<blockquote>块级引用（长文本引用，自动缩进）</blockquote>
<q>行内引用（短文本引用，自动加引号）</q>
<code>代码片段（等宽字体，用于展示代码）</code>
<pre>预格式化文本（保留空格、换行，常用于展示代码块）</pre>

  ```
 ### 2. 布局容器类
 - div 通用块级容器，页面分块布局核心
 - header/main/footer 语义化布局标签
 <!-- 通用块级容器：页面分块布局的核心，无语义，纯布局用 -->
```
<div>这是通用div容器，块级元素，独占一行，用于页面分栏、模块划分</div>

<!-- HTML5 语义化布局标签（SEO友好，结构清晰，推荐替代 div） -->
<header>页面头部/模块头部（如导航栏、页头）</header>
<nav>导航栏（专门放菜单、链接）</nav>
<main>页面主体内容（一个页面只写1个，核心内容区）</main>
<section>章节/区块（有明确主题的内容块）</section>
<article>独立内容（如文章、博客、帖子）</article>
<aside>侧边栏（辅助内容，如广告、相关推荐）</aside>
<footer>页面底部/模块底部（如版权信息、联系方式）</footer>

<!-- 行内块容器：不独占一行，可设置宽高，常用于图文混排、小模块 -->
<div style="display: inline-block;">行内块容器</div>
<span style="display: inline-block;">行内块容器</span>
```

 ### 3. 表单交互类
 - input 单行输入
 - textarea 多行大文本输入
 - button 原生点击交互按钮
 
 <!-- 表单根标签：所有表单元素都要包裹在 form 内 -->
<form action="提交地址" method="get/post">
    <!-- 1. 单行输入框 -->
    <input type="text" placeholder="请输入用户名" name="username">
    <input type="password" placeholder="请输入密码" name="pwd">
    <input type="email" placeholder="请输入邮箱" name="email">
    <input type="number" placeholder="请输入数字" name="age">
    <input type="tel" placeholder="请输入手机号" name="phone">
    <input type="url" placeholder="请输入网址" name="website">
    <input type="date" name="birthday"> <!-- 日期选择器 -->
    <input type="time" name="time"> <!-- 时间选择器 -->
    <input type="file" name="file"> <!-- 文件上传 -->
    <input type="hidden" name="id" value="123"> <!-- 隐藏域，用户不可见 -->
    <input type="search" placeholder="搜索" name="search"> <!-- 搜索框 -->

    <!-- 2. 单选框（name 必须相同，才能互斥） -->
    <label><input type="radio" name="gender" value="male" checked> 男</label>
    <label><input type="radio" name="gender" value="female"> 女</label>

    <!-- 3. 复选框（name 可相同，用于多选） -->
    <label><input type="checkbox" name="hobby" value="read" checked> 阅读</label>
    <label><input type="checkbox" name="hobby" value="game"> 游戏</label>
    <label><input type="checkbox" name="hobby" value="sport"> 运动</label>

    <!-- 4. 下拉选择框 -->
    <select name="city">
        <option value="beijing">北京</option>
        <option value="shanghai" selected>上海</option>
        <option value="guangzhou">广州</option>
    </select>

    <!-- 5. 多行文本输入框（textarea） -->
    <textarea name="content" rows="5" cols="30" placeholder="请输入留言内容"></textarea>

    <!-- 6. 按钮 -->
    <button type="submit">提交表单</button>
    <button type="reset">重置表单</button>
    <button type="button">普通按钮（需配合JS）</button>
    <input type="button" value="input按钮">
    <input type="submit" value="input提交按钮">
    <input type="reset" value="input重置按钮">

    <!-- 7. 标签 label：点击文字即可选中对应表单元素，提升交互体验 -->
    <label for="username">用户名：</label>
    <input type="text" id="username" name="username">

    <!-- 8. 表单分组与标题 -->
    <fieldset>
        <legend>个人信息</legend>
        <!-- 表单元素写在这里 -->
    </fieldset>
</form>

 ## 列表类
 <!-- 无序列表（ul>li，常用于导航、菜单） -->
<ul>
    <li>列表项1</li>
    <li>列表项2</li>
    <li>列表项3
        <ul>
            <li>嵌套列表项1</li>
            <li>嵌套列表项2</li>
        </ul>
    </li>
</ul>

<!-- 有序列表（ol>li，常用于步骤、排名） -->
<ol>
    <li>步骤1</li>
    <li>步骤2</li>
    <li>步骤3</li>
</ol>

<!-- 定义列表（dl>dt+dd，常用于术语解释、图文说明） -->
<dl>
    <dt>HTML</dt>
    <dd>超文本标记语言，用于搭建网页结构</dd>
    <dt>CSS</dt>
    <dd>层叠样式表，用于美化网页样式</dd>
</dl>

 ## 核心公共属性
 - class：归类，CSS批量样式、JS批量获取
 - id：唯一标识，JS精准单选元素
 - placeholder:输入占位提示文字
    




