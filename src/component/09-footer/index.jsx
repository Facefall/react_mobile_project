import React, {Component} from 'react';
import {
    NavLink
} from 'react-router-dom'
import "./footer.scss";




class Index extends Component {
    componentDidMount() {
        this._footer.addEventListener("touchend",(e) => {
            e.target.classList.toggle('active');
            // if (e.targe)
            // if (e.target.classList.contains('active')){
            //     e.target.classList.remove('active')
            // } else{
            //     e.target.classList.add('active')
            // }
            // console.log(e.target);
            // this._Cart.style='color:#ff6700';

        })
    }

    //触发顺序 touchStart toucheEnd click
    //touchEnd
    // handleClick = (className) =>{
    //     console.log(className);
    // };

    render() {
        return (
            <footer ref={footer=>this._footer = footer}>
                <NavLink exact to={'/'} ref={div => this._home = div}>
                    <div className={'Home'} >
                        <i className={'iconfont icon-shouye'} />
                        <p>首页</p>
                    </div>
                </NavLink>
                <NavLink to={'buyPage'} ref={div => this._Category = div}>
                    <div className={'Category'}  >
                        <i className={'iconfont icon-icon-'} />
                        <p>分类</p>
                    </div>
                </NavLink>

                <NavLink to={'shopCart'} ref={div=>this._Cart = div}>
                    <div className={'Cart'}   >
                        <i className={'iconfont icon-gouwuche'} />
                        <p>购物车</p>
                    </div>
                </NavLink>
                <NavLink to={'myPage'} ref={div=>this._use = div}>
                    <div className={'User'}  >
                        <i className={'iconfont icon-yonghu'} />
                        <p>我的</p>
                    </div>
                </NavLink>

            </footer>
        );
    }
}

export default Index;