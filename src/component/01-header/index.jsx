import React, {Component} from 'react';
import "./header.scss";

class Header extends Component {
    render() {
        return (
            <header>
                <div className={'App-header'}>
                    <div className={'App-logo'}>
                        <img src={require('../../img/logo.png')} alt=""/>
                    </div>
                    <div className={'App-search'}>
                        <i className={'search-icon iconfont icon-sousuo'}></i>
                        <input type="text" defaultValue={"搜索商品名称"}/>
                    </div>
                    <div className={'App-login'}>
                        <i className={'user iconfont icon-yonghu'}></i>
                    </div>
                </div>
                <div className={'App-nav'}>
                    <div className={'h-nav'}>
                        <ul>
                            {/*
                                onclick p classname = 'active
                            */}
                            <li><p>推荐</p></li>
                            <li><p>手机</p></li>
                            <li><p>智能</p></li>
                            <li><p>电视</p></li>
                            <li><p>笔记本</p></li>
                            <li><p>家电</p></li>
                            <li><p><i className={'iconfont icon-xiangxia'}/></p></li>
                            {/*<li><p>生活周边</p></li>*/}
                        </ul>
                    </div>

                </div>
            </header>
        );
    }
}

export default Header;