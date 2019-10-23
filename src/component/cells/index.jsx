import React, {Component} from 'react';
import './cells.scss';
class Cells extends Component {
    render() {
        return (
            <div className={'Cells'}>
                <ul>
                    <li><a href="www.baidu.com"><img src={require('../../img/item1.png')} alt=""/></a></li>
                    <li><a href="www.baidu.com"><img src={require('../../img/item2.webp')} alt=""/></a></li>
                    <li><a href="www.baidu.com"><img src={require('../../img/item3.gif')} alt=""/></a></li>
                    <li><a href="www.baidu.com"><img src={require('../../img/item4.webp')} alt=""/></a></li>
                    <li><a href="www.baidu.com"><img src={require('../../img/item5.webp')} alt=""/></a></li>
                    <li><a href="www.baidu.com"><img src={require('../../img/item-1.png')} alt=""/></a></li>
                    <li><a href="www.baidu.com"><img src={require('../../img/item-2.jpg')} alt=""/></a></li>
                    <li><a href="www.baidu.com"><img src={require('../../img/item-3.png')} alt=""/></a></li>
                    <li><a href="www.baidu.com"><img src={require('../../img/item-4.png')} alt=""/></a></li>
                    <li><a href="www.baidu.com"><img src={require('../../img/item-5.png')} alt=""/></a></li>
                </ul>
            </div>
        );
    }
}

export default Cells;