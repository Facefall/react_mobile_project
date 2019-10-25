import React, {Component} from 'react';

class Index extends Component {

    render() {
        return (
            <li>
                <img src={require('../../../img/redmi8pro.jpg')} alt=""/>
                <div className={'product-info'}>
                    <p className={'product-name'}>Redmi Note 8 Pro</p>
                    <p className={'brief'}>6400万全场景四摄</p>
                    <div className={'price'}>
                        <i className={'iconfont icon-jiage'}/>
                        <span>1399 </span>
                        起
                    </div>
                </div>
                <div className={'tobut-btn'}>
                    立即购买
                </div>
            </li>
        );
    }
}

export default Index;