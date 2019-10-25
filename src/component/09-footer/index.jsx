import React, {Component} from 'react';
import "./footer.scss";

class Index extends Component {
    render() {
        return (
            <footer>
                <div className={'Home'} >
                    <i className={'iconfont icon-shouye'} />
                    <p>首页</p>
                </div>
                <div className={'Category'} >
                    <i className={'iconfont icon-icon-'} />
                    <p>分类</p>
                </div>
                <div classname={'Cart'} >
                    <i className={'iconfont icon-gouwuche'} />
                    <p>购物车</p>
                </div>
                <div classname={'User'} >
                    <i className={'iconfont icon-yonghu'} />
                    <p>我的</p>
                </div>
            </footer>
        );
    }
}

export default Index;