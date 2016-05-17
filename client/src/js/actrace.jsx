import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import tips from './dist/js/notification.js';
import Intro from './dist/js/Intro.js';
import {all, get, insert} from './dist/js/db.js';
import {co} from 'co';


co(function* () {
    // var b = yield insert('1',{
    //     'content': 'Just Fun'
    // });
    var _all = yield all();
    var _some = yield get("123").then((val)=>{
        // console.log(val);
    });
    var c = yield [_some,_all];
    // console.log(_all);
})


class ACT extends Component {
    constructor(props) {
        super(props);
        // tips.show('fuck!');
    }
    componentDidMount() {
        this.refs.intro.show();
    }
    render() {
        return (
            <div>
                <Intro ref='intro' />
            </div>
        );
    }
}
ReactDOM.render(
    <ACT />,
    document.querySelector('.actrace')
)
