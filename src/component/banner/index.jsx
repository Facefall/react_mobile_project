import React, {Component} from 'react';
import "./banner.scss";

class Banner extends Component {
    render() {
        return (
            <div className={'banner'}>
                <ul>
                    <li><a href=""><img src={require('../../img/banner1.jpg')} alt=""/> </a></li>
                    <li><a href=""><img src={require('../../img/banner2.jpg')} alt=""/> </a></li>
                    <li><a href=""><img src={require('../../img/banner3.jpg')} alt=""/> </a></li>
                </ul>
            </div>
        );
    }
}

export default Banner;