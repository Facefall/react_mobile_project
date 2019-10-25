import React, {Component} from 'react';
import "./products.scss";
// import "";

class Index extends Component {
    render() {
        return (
            <div className={'ProductList'}>
                <ul>
                    <li>
                        <img src={require('../../img/redmi8pro.jpg')} alt=""/>
                        <div className={'product-info'}>
                            <p className={'product-name'} >Redmi Note 8 Pro</p>
                            <p className={'brief'} >6400万全场景四摄</p >
                            <div className={'price'}>
                                <i className={'iconfont icon-jiage'} />
                                <span>1399 </span>
                                起
                            </div>
                        </div>
                        <div className={'tobut-btn'} >
                            立即购买
                        </div>
                    </li>
                    <li>
                        <img src={require('../../img/note8.jpg')} alt=""/>
                        <div className={'product-info'}>
                            <p className={'product-name'} >Redmi Note 8 Pro</p>
                            <p className={'brief'} >6400万全场景四摄</p >
                            <div className={'price'}>
                                <i className={'iconfont icon-jiage'} />
                                <span>1399 </span>
                                起
                            </div>
                        </div>

                        <div className={'tobut-btn'} >
                            立即购买
                        </div>
                    </li>
                </ul>
                <ul>
                    <li><img src={require('../../img/k20pro.jpg')} alt=""/></li>
                    <li><img src={require('../../img/k20.webp')} alt=""/></li>
                </ul>

                {/*<li><img src={require('../../img/k20.webp')} alt=""/></li>*/}
            </div>
        );
    }
}

export default Index;