import React, {Component, PropTypes} from 'react';

class Detail extends Component {
    render() {
        let {detail} = this.props;
        console.log(detail);
        return (
            <div key={detail.id} className='detail'>
                <p className='name'><a href={detail.href} target='_back'>{detail.name}</a></p>
                <img src={detail.img} alt="bg"/>
                <p>上次看到:{detail.chapter}</p>
            </div>
        );
    }
}

Detail.propTypes = {

};

export default Detail;