// import React, {Component} from 'react';
// import ReactDOM from 'react-dom';
// import tips from './notification';
// import {get, insert} from './db';
var co = require('co');
var msg = require('./src/js/db');

co(function* () {
    var a = yield msg.get().then((val)=>{})
    // var b = msg.insert({
    //     'content': 'Just Fun',
    //     'user': 'zwei'
    // }).then((val)=>{});
    var c = yield [a];
    var d = yield msg.get();
})


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
