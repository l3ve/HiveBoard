import React, { Component } from 'react';
import io from 'socket.io-client';
import Switch from './component/switch';

import './css/home';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reqList: [],
            reqDetail: {
                req: {
                    headers: {}
                },
                res: {}
            },
            detailCls: 'hidden'
        }
        this.io = io('http://localhost:3333');
        this.hideDetail = this.hideDetail.bind(this);
    }
    componentWillMount() {
        this.io.on('sys-msg', (res) => {
            console.log(res.msg);
        })
        this.io.on('req&res-Info', (res) => {
            let {reqList} = this.state;
            this.setState({
                reqList: reqList.concat(res)
            });
        })
    }
    saveInfo(info, status) {
        let {reqList} = this.state;
        reqList.forEach((ele, i) => {
            if (ele.req.path == info.req.path && ele.req.hostname == info.req.hostname) {
                ele.where = status ? 'Local' : 'Remote';
                this.io.emit('change-info', ele);
            }
        });
    }
    showDetail(info) {
        this.setState({
            reqDetail: info,
            detailCls: ''
        });
    }
    hideDetail() {
        this.setState({
            detailCls: 'hidden'
        });
    }
    render() {
        const {reqList, reqDetail, detailCls} = this.state,
            keyForReqHeader = Object.keys(reqDetail.req.headers),
            keyForResHeader = Object.keys(reqDetail.res);
        return (
            <div className='home'>
                <div className='proxy-list'>
                    {reqList.map((info, i) => {
                        return (
                            <p key={info.type + i} className='the-one' onClick={() => this.showDetail(info)}>
                                <span className={'type ' + info.type}>{info.type}</span>
                                <span className='method'>{info.req.method}:</span>
                                <span className='url'>http://{info.req.headers.host}{info.req.path}</span>
                                <Switch defaulStatus={info.where=='Local'} onChange={(status) => this.saveInfo(info, status)} />
                            </p>
                        )
                    })}
                </div>
                <div className={'detail-info ' + detailCls}>
                    <div className='shadow animated fadeIn' onClick={this.hideDetail}></div>
                    <div className='center animated bounceInRight'>
                        <div className='req'>
                            <p className='header'>Request</p>
                            <p className='prop' ><span>method : </span>{reqDetail.req.method}</p>
                            <p className='prop' ><span>url : </span>{reqDetail.req.hostname}{reqDetail.req.path}</p>
                            {
                                keyForReqHeader.map((key) => {
                                    return <p className='prop' ><span>{key} : </span>{reqDetail.req.headers[key]}</p>
                                })
                            }
                        </div>
                        <div className='res'>
                            <p className='header'>Response</p>
                            {
                                keyForResHeader.map((key) => {
                                    return <p><span>{key} : </span>{reqDetail.res[key]}</p>
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;