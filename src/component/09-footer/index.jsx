import React, {Component} from 'react';
// import  from "";
import {
    NavLink
} from 'react-router-dom'
import "./footer.scss";




class Index extends Component {
    render() {
        return (
            <footer>
                <NavLink to={'/'} >
                    <div className={'Home'} >
                        <i className={'iconfont icon-shouye'} />
                        <p>首页</p>
                    </div>
                </NavLink>
                <NavLink to={'/'} >
                    <div className={'Category'} >
                        <i className={'iconfont icon-icon-'} />
                        <p>分类</p>
                    </div>
                </NavLink>

                <NavLink to={'shopCart'} >
                    <div className={'Cart'} >
                        <i className={'iconfont icon-gouwuche'} />
                        <p>购物车</p>
                    </div>
                </NavLink>
                <NavLink to={'myPage'} >
                    <div className={'User'} >
                        <i className={'iconfont icon-yonghu'} />
                        <p>我的</p>
                    </div>
                </NavLink>

            </footer>
        );
    }
}

export default Index;