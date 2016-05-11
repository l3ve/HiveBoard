import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import tips from './notification.js';
import {all, get, insert} from './db.js';
import {co} from 'co';



co(function* () {
    var b = yield insert('123',{
        'content': 'Just Fun'
    }).then((val)=>{});
    var _all = yield all();
    var a = yield get(123);
    var c = yield [a,b];
    var d = yield get();

})


class ACT extends Component {
    constructor(props) {
        super(props);
        // tips.show('fuck!');
    }
    render() {
        return (
            <div>
                ACT
            </div>
        );
    }
}
ReactDOM.render(
    <ACT />,
    document.querySelector('body')
)
