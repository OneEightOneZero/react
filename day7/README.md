react的`jsx`是以下的
```js
let template = <div>
    <p name='lemon'>Hello World</p>
</div>
```
如果按照以前jquery的方法去处理这个HTML模板，需要用大量处理字符串的方法

但是经过babel转换，把上面一段类似HTML转化为对象
```js
let obj = {
    type: 'div',
    props: {
        children: {
            type: 'p',
            props: {
                name: 'lemon',
                children: 'Hello World'
            }
        }
    }
}
```
以前我们需要用字符串去处理模板，现在我们变成处理对象
```js
obj['props']['children']['props']['children'] = 'xxx'
```
jsx的本质是用对象(js)来面熟HTML结构

jsx其实是需要babel来去做转化的，jsx这种代码首先它不属于js，但是它最终将会转化为js(js对象)，而转化的功能交给了babel处理

babel在经典写法里面是需要引入`babel.js`，但是如果你用了模块化，webpack的`babel-loader`,它有两个租用jsx->js es6+ -> es5

第一步,需要借助babel
```html
let template = <div>
    <p name='lemon'>Hello World</p>
</div>
```
转化为
```jsx
let template = React.createElement("div", null,
    React.createElement("p", { name: 'lemon' },
        "Hello World")
);
```
第二步，把上面的代码继续转化为对象
```js
let template = {
    type: 'div',
    props: {
        children: {
            type: 'p',
            props: {
                name: 'lemon',
                children: 'Hello World'
            }
        }
    }
}
```

# Proxy

不同于`Object.defineProperty`，以前这个`Object.defineProperty`是有缺陷的，它不能劫持数组，Proxy其实就是它的升级版本
```js
let proxyData = new Proxy({}, {
    set(target,props,value,old) {
        console.log(target,props,value,old)
        target[props] = value;
        return true;
    },
    get(target,props,old) {
        console.log(target,props,old)
        return target[props]
    }
});
```
需要`new Proxy()`，它接受两个对象，第一个参数为被劫持的对象，第二个参数为一个存放着`set和get`的对象，`let proxyData = new Proxy()`，而`proxyData`其实就是经过原对象被劫持后的对象,所以修改或者获取`proxyData`这个对象，就可以出发对应`set和get`

> JSX -> createElement()结构 -> 对象 -> 真实DOM

# 带函数的情况

```js
let template = {
    type: 'div',
    props: {
        children: {
            type: 'p',
            props: {
                name: 'lemon',
                onClick: ()=>{ console.log('test') },
                children: 'Hello World'
            }
        }
    }
}
```