// let template = <div>
//     <p name='lemon'>Hello World</p>
// </div>;
// import React from './react.js';
// import ReactDOM from './react-dom.js'
import React from 'react';
import ReactDOM from 'react-dom';
let data = {
    'title': "一个框架的测试",
    'testClick': () => {
        console.log('test')
    }
}
let template = <div name="lemon">
    {data.title}
    <p onClick={data.testClick} skill="ps">Lemon</p>
    <p age="18">Eno</p>
</div>
console.log(template);
// JSX -> createElement()结构 -> 对象 -> 真实DOM
// let template = React.createElement("div", { name: "lemon" },
//     data.title,
//     React.createElement("p", { skill: "ps" }, "Lemon"),
//     React.createElement("p", { age: "18" }, "Eno")
// );
// console.log(React.createElement("div", { name: 'lemon' }, 'hello Wolrd'))
// let template = React.createElement("div", { name: 'lemon' }, 'hello Wolrd');
// import React from 'react';
// console.log(template)
ReactDOM.render(
    template
    , document.querySelector('#demo'));
// let template = React.createElement("div", null,
//     React.createElement("p", { name: 'lemon' },
//         "Hello World")
// );

