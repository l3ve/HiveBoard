import React, {Component} from 'react';

import './css/wave';

class WaveOne extends Component {
    constructor(props) {
        super(props);
        this.state = {
            css: {}
        }
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                css: this.props.nextCss
            });
        }, 10);
    }
    render() {
        let {css} = this.state;
        return (
            <div className='wave' style={css}></div>
        )
    }
}

class Wave extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flashs: [],
            n: 1
        };
    }
    star(e) {
        let {flashs, n} = this.state,
            {clientWidth, clientHeight, offsetLeft, offsetTop, offsetParent} = e.target,
            flash_wh = clientWidth > clientHeight ? clientWidth * 2 : clientHeight * 2,
            _x = e.clientX - offsetParent.offsetLeft - offsetLeft - flash_wh / 2,
            _y = e.clientY - offsetParent.offsetTop - offsetTop - flash_wh / 2;
        const nextCss = {
            transform: 'scale(.7)',
            width: flash_wh,
            height: flash_wh,
            opacity: 0,
            top: _y,
            left: _x
        };
        flashs.push(
            <WaveOne key={n} nextCss={nextCss}/>
        );
        this.setState({
            flashs: flashs,
            n: n + 1
        });
        setTimeout(() => {
            let {flashs} = this.state;
            flashs.shift();
            this.setState({
                flashs: flashs
            });
        }, 2000);
    }
    render() {
        let {flashs} = this.state;
        return (
            <div className='zwei-wave'>
                {flashs.map((flash, index) =>
                    flash
                ) }
            </div>
        )
    }
}

export default Wave;
