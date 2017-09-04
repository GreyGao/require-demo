# 简单描述RequireJS用法的demo

## 主页预览链接

https://greygao.github.io/require-demo/index.html

##  描述
1. 首先，在主index.html在script中引入我们的require.js的依赖，
```html
<script src="./require.js"></script>
```
2. 由requirejs的说明文档可知，我们还需要引用以下声明来异步加载main.js：
```html
<script data-main="scripts/main" src="require.js"></script>
```
3. main.js可以看作是整个html的JS管理入口，之后我们所有的依赖都在main.js里来控制处理。main.js基本内容分两部分
    - require.config主要来布置一些外来引入的依赖，用固定的path定义，        
    - requirejs([url],callback)来引入我们自己定义的依赖，可以有多个：
```javascript
require.config({
    paths: {
        jquery: 'jquery.min'
    }
});

requirejs(["hello"], function(hello) {
    //回调函数内容
    var text = JSON.stringify(hello);
    var content = document.createElement("div");
    content.innerHTML = text;
    document.body.appendChild(content);
    console.log(2)
});
```
4. 与之相应的，被引入的依赖如hello.js就需要用define()来定义，才可以被成功引用，而在define()内部，我们可以继续引用其他依赖，如frank.js；
```javascript
define(["frank"],function (text) {
	console.log(text)
    console.log(1)
  	//回调函数内容
  	return text;
    }
);
```
5. 定义frank.js为一个数据文件：
```javascript
define(
    {
        name:"frank",
        age:18,
        hobby:"coding",
        parter:"dog",
        sayHi:"Hello, Frank"
    }
);
```
5. 为了看出执行的先后顺序，在每一层函数里加入了console.log(1),console.log(2).可以看出执行顺序是先hello.js后main.js：
```
{name: "frank", age: 18, hobby: "coding", parter: "dog", sayHi: "Hello, Frank"}
1
2
```
6. 这样就可以实现一个RequireJS模块化管理的基本模型，例子中的main.js定义了一个固定路径的jquery依赖和自己定义的hello.js模块，又在hello.js内引入frank.js的数据，最后成功拿到frank的数据，输出在页面里。