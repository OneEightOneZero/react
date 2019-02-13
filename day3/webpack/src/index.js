// import $ from "jquery";
// $("body").html("hello world")

// JSX
let template = <div class="red">
    <p name="lemon">Hello world</p>
</div>

// createElement  第一个参数是节点的名字，第二个参数该标签属性的名字，第三个是标签内的内容
// React.createElement("div", null, )

// JS
// let template = React.createElement("div", null, React.createElement("p", null, "Hello world"));

// JSX其实就是转化为JS的一个由React.createElement描述的一个DOM结构


import React from "./react.js";
console.log(React)

// JSX转化为对象

// JSX就是把HTML结构转化为JS对象
// 用JS对象来描述DOM结构
// JS对象是跟DOM结构关联的，操作对象比操作DOM结构廉价
let JSXObj = React.createElement("div", {"class": "red"},"hello world")
console.log(JSXObj)
JSXObj.props.children[0].props.nodeValue = "abc"
// let template = React.createElement("div", {"class": "red"}, React.createElement("p", {name: "lemon"}, "Hello world"));

