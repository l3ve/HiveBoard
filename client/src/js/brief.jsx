import React, {Component, PropTypes} from 'react';
import {co} from 'co';
import {remove} from './db.js';

class List extends Component {
    del(id) {
        console.log(id);
        co(function*(){
            let state = yield remove(id);
            console.log(state,111);
            this.props.getAll();
        }.bind(this))
    }
    render() {
        let {_data} = this.props;
        return (
            <div className='trace'>
                {_data.name || _data.content}
                <span className='list-del-btn' onClick={()=>{this.del(_data.id)}}>删除</span>
            </div>
        )
    }
}


class Brief extends Component {
    render() {
        let {list,getAll} = this.props;
        // console.log(list);
        return (
            <div className='brief'>
                {list.map((one,index)=>{
                    return <List key={index} _data={one} getAll={getAll} />
                })}
            </div>
        );
    }
}

Brief.propTypes = {

};

export default Brief;