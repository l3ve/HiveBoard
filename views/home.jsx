import React, { Component } from 'react';
import Switch from './component/switch';
import message from './component/message';
import io from './js/socket_client';

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
            proxyFile: {},
            filterStatus: {
                js: 'on',
                css: 'on',
                img: 'on',
                other: 'on'
            },
            detailCls: 'hidden'
        }
        this.hideDetail = this.hideDetail.bind(this);
    }
    componentWillMount() {
        io.on('sys-msg', (res) => {
            message.success({
                message: res.msg,
                duration: 2
            });
        })
        io.on('req&res-Info', (res) => {
            let {reqList} = this.state,
                _isBe = false;
            //去重
            _isBe = reqList.find((info, i) => {
                return res.req.path == info.req.path && res.req.hostname == info.req.hostname
            })
            if (!!_isBe) return false;
            this.setState({
                reqList: reqList.concat(res)
            });
        })
        io.on('all-local-file-list', (res) => {
            const _reqMix = this.mixis(res);
            this.setState({
                reqList: _reqMix
            });
        })
        io.on('filter-status', (res) => {
            this.setState({
                filterStatus: res.filterStatus
            });
        })
        io.emit('init');
    }
    mixis(proxyFile) {
        let {reqList} = this.state;
        return reqList.map((req) => {
            let _temp = {
                ...req,
                where: 'Remote'
            };
            proxyFile.forEach((pxy) => {
                if (req.req.hostname == pxy.host && req.req.path == pxy.path) {
                    _temp = {
                        ...req,
                        _id: pxy._id,
                        where: pxy.where,
                        localPath: pxy.localPath
                    }
                }
            })
            return _temp;
        })
    }
    saveInfo(info, status) {
        let {reqList} = this.state;
        reqList.forEach((ele, i) => {
            if (ele.req.path == info.req.path && ele.req.hostname == info.req.hostname) {
                ele.where = status == 'checked' ? 'Local' : 'Remote';
                io.emit('change-info', ele);
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
        const {reqList, reqDetail, detailCls, filterStatus} = this.state,
            keyForReqHeader = Object.keys(reqDetail.req.headers),
            keyForResHeader = Object.keys(reqDetail.res);
        return (
            <div className='home'>
                <div className='proxy-list'>
                    {reqList.map((info, i) => {
                        if (filterStatus[info.type]=='off') return false;
                        return (
                            <p key={info.type + i} className='the-one' onClick={() => this.showDetail(info)}>
                                <span className={'type ' + info.type}>{info.type}</span>
                                <span className='method'>{info.req.method}:</span>
                                <span className='url'>http://{info.req.headers.host}{info.req.path}</span>
                                <Switch defaulStatus={info.where == 'Local'} onChange={(status) => this.saveInfo(info, status)} />
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