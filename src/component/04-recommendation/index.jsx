import React, {Component} from 'react';
import "./recommendation.scss";

class Index extends Component {
    render() {
        return (
            <div className={'recommendation'}>
                <a href="www.baidu.com"><img src={require('../../img/product1.jpg')} alt=""/></a>
                <a href="www.baidu.com"><img src={require('../../img/product2.jpg')} alt=""/></a>
                <a href="www.baidu.com"><img src={require('../../img/product3.jpg')} alt=""/></a>
            </div>
        );
    }
}

export default Index;