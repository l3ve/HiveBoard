// import React, {Component} from 'react';
// import ReactDOM from 'react-dom';
// import tips from './notification';
// import {get, insert} from './db';
var msg = require('./src/js/db');


// var dd = run(msg.insert, {
//     'content': 'Just Fun',
//     'user': 'zwei'
// });
// console.log(dd);
var rx = run(msg.get);
console.log(rx);
// class ACT extends Component {
//     constructor(props) {
//         super(props);
//         // tips.show('fuck!');
//     }
//     render() {
//         return (
//             <div>
//                 ACT
//             </div>
//         );
//     }
// }
// ReactDOM.render(
//     <ACT />,
//     document.querySelector('body')
// )

function run(fn, para = {}) {
    var gen = fn(para);
    function next(err, data) {
        var result = gen.next(data);
        if (result.done) {
            return result.value;
        };
        console.log(result.value.toString());
        result.value(next);
        return 'fuck';
    }
    return next();
}
