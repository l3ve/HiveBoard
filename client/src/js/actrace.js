// import React, {Component} from 'react';
// import ReactDOM from 'react-dom';
// import tips from './notification';
// import {get, insert} from './db';
var msg = require('./src/js/db')

// var fs = require('fs');
function* aa(){
    // var _id = msg.insert({
    //     'content': 'Just Fun',
    //     'user': 'zwei'
    // });
    var list = yield msg.get();
    console.log(list);
}
var rx = aa();
console.log(rx.next().value.next());

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