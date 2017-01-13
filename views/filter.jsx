import React, {Component} from 'react';
import Checkbox from './component/checkbox';

import './css/filter';

class Filter extends Component {
    render() {
        return (
            <div className='filter animated fadeInDown'>
                <Checkbox label='JS' />
            </div>
        );
    }
}

export default Filter;