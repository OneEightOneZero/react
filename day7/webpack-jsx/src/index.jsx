// let template = <div>
//     <p name='lemon'>Hello World</p>
// </div>;
import React from './react.js';
import ReactDOM from './react-dom.js'
let template = <div name='lemon'>
    ABC
</div>
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

