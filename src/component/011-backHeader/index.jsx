import React, {Component} from 'react';
import "./index.scss";

class Index extends Component {
    render() {
        return (
            <header  >
                <div className={'backHeader'}>
                    <img src={require('../../img/arrow.png')} alt="arrow" className="arrow"/>
                    <span>分类</span>
                    <i className={'iconfont icon-sousuo'} />
                </div>
            </header>
        );
    }
}

export default Index;