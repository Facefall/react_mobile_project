import React, {Component} from 'react';
import "./index.scss";
import {
    NavLink
} from "react-router-dom";



class Index extends Component {
    state={
        subtitle:'购物车'
    };

    componentDidMount() {
        // console.log(this.props);
        // console.log(this.state);
        if (this.props.subtitle !== this.state.subtitle){
            this.setState({
                subtitle:this.props.subtitle
            })
        }
    }

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