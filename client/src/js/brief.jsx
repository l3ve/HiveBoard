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
    handleClick(_data) {
        this.props.toDetail(_data);
    }
    render() {
        let {_data} = this.props;
        return (
            <div className='trace'>
                <span onClick={()=>this.handleClick(_data)}> {_data.name}</span>
                <span className='list-del-btn' onClick={()=>{this.del(_data.id)}}>删除</span>
            </div>
        )
    }
}


class Brief extends Component {
    render() {
        let {list,getAll,toDetail} = this.props;
        // console.log(list);
        return (
            <div className='brief'>
                {list.map((one,index)=>{
                    return <List key={index} _data={one} getAll={getAll} toDetail={toDetail} />
                })}
            </div>
        );
    }
}

Brief.propTypes = {

};

export default Brief;