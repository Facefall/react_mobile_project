import React, {Component} from 'react';
import "./index.scss";
import {
    NavLink
} from "react-router-dom";
// import MainPage from "../12-mainPage";



class Index extends Component {
    state={
        subtitle:'购物车'
    };

    render() {
        return (
            <header  >
                <div className={'backHeader'}>
                    <NavLink to={'/'}>
                        <img src={require('../../img/arrow.png')} alt="arrow" className="arrow"/>
                    </NavLink>
                    <span>{this.state.subtitle}</span>
                    <i className={'iconfont icon-sousuo'} />
                </div>
            </header>
        );
    }
}

export default Index;