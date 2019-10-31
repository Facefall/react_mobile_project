import React, {Component} from 'react';
import "./banner.scss";
import Swiper from 'swiper';

class Banner extends Component {

    componentDidMount() {
        var mySwiper = new Swiper('.swiper-container', {
            autoplay: true,//可选选项，自动滑动
            loop: true,
            pagination: {
                el: '.swiper-pagination',
            },
        });
    }

    render() {
        return (
            <div className={'banner swiper-container'}>
                <ul className={'swiper-wrapper'} >
                    <li className={'swiper-slide'} ><img src={require('../../img/banner1.jpg')} alt="banner1"/> </li>
                    <li className={'swiper-slide'} ><img src={require('../../img/banner2.jpg')} alt="banner2"/> </li>
                    <li className={'swiper-slide'} ><img src={require('../../img/banner3.jpg')} alt="banner3"/> </li>
                </ul>
                <div className={'swiper-pagination'}/>
            </div>
        );
    }
}

export default Banner;