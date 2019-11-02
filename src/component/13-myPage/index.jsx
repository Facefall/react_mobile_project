import React, {Component} from 'react';
import "./index.scss";
import Footer from "../09-footer/index";


class Index extends Component {
    render() {
        return (
            <div className={'App-MyPage'}>
                <header>
                    <div className="user"><a href="javascript;;"><img src={require('./img/user.png')} alt="user"/></a>
                    </div>
                    <p>登录/注册</p>
                </header>

                <section className="order">
                    <div className="all-order">
                        <span className={'myOrder'}>我的订单</span>
                        <span className={'AllOrder'}>全部订单</span>
                        <img className={'arrow'} src={require('../../img/arrow.png')} alt="next"/>
                    </div>
                    <div className="action">
                        <div className={'NeedPay'}>
                            <img src={require('./img/needPay.png')} alt="pay"/>
                            <p>代付款</p>
                        </div>
                        <div>
                            <div className="NeedTake">
                                <img src={require('./img/needRecevied.png')} alt="take"/>
                                <p>待收货</p>
                            </div>
                        </div>
                        <div className={'Replacement'}>
                            <img src={require('./img/replacement.png')} alt="Replacement"/>
                            <p>退换修</p>
                        </div>
                    </div>
                </section>

                <div className="Divider"/>

                <section className={'services-List'}>

                    <div className={'service'}>
                        <img src={require('./img/vipCenter.png')} alt=""/>
                        <div className={'service-right divider'} >
                            <p>
                                会员中心
                            </p>
                            <img className={'arrow'} src={require('../../img/arrow.png')} alt=""/>
                        </div>
                    </div>
                    <div className={'service'}>
                        <img src={require('./img/discount.png')} alt="discount"/>
                        <div className="service-right">
                            <p>我的优惠</p>
                            <img className={'arrow'} src={require('../../img/arrow.png')} alt=""/>
                        </div>
                    </div>
                </section>

                <div className="Divider"/>

                <section className={'services-List'}>

                    <div className={'service'}>
                        <img src={require('./img/fuwuzhongxing.png')} alt=""/>
                        <div className={'service-right divider'} >
                            <p>
                                服务中心
                            </p>
                            <img className={'arrow'} src={require('../../img/arrow.png')} alt=""/>
                        </div>
                    </div>
                    <div className={'service'}>
                        <img src={require('./img/xiaomiHome.png')} alt="discount"/>
                        <div className="service-right">
                            <p>小米之家</p>
                            <img className={'arrow'} src={require('../../img/arrow.png')} alt=""/>
                        </div>
                    </div>
                </section>

                <div className="Divider"/>

                <section className={'services-List'}>

                    <div className={'service'}>
                        <img src={require('./img/fma.png')} alt=""/>
                        <div className={'service-right divider'} >
                            <p>
                                我的F码
                            </p>
                            <img className={'arrow'} src={require('../../img/arrow.png')} alt=""/>
                        </div>
                    </div>
                    <div className={'service'}>
                        <img src={require('./img/gift.png')} alt="discount"/>
                        <div className="service-right">
                            <p>礼物码兑换</p>
                            <img className={'arrow'} src={require('../../img/arrow.png')} alt=""/>
                        </div>
                    </div>
                </section>

                <div className="Divider"/>

                <section className={'services-List'}>

                    <div className={'service'}>
                        <img src={require('./img/i-setting.png')} alt=""/>
                        <div className={'service-right divider'} >
                            <p>
                                设置
                            </p>
                            <img className={'arrow'} src={require('../../img/arrow.png')} alt=""/>
                        </div>
                    </div>

                </section>

                <Footer/>
            </div>
        );
    }
}

export default Index;