import React, {Component, PropTypes} from 'react';
import Io from './js/socket-C';

import './css/interface';

class Interface extends Component {
    constructor() {
        super();
        this.state = {
            cur: '0'
        }
        this.socket = '';
    }
    componentDidMount() {
        // this.socket = new Io();
    }
    render() {
        const {cur} = this.state;
        return (
            <div className='interface'>
                adf
            </div>
        );
    }
}

Interface.propTypes = {

};

export default Interface;