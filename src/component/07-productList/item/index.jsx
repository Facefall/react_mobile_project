import React, {Component} from 'react';

class Index extends Component {
    state = {img: "k20.webp"};//set default value

    constructor(props) {
        super(props);

    }

    componentDidMount() {
        this.setState({
            img: this.props.img
        })
    }

    render() {
        return (
            <li>
                <img src={require(`../../../img/${this.state.img}`)} alt=""/>
                <div className={'product-info'}>
                    <p className={'product-name'}>Redmi Note 8 Pro</p>
                    <p className={'brief'}>6400万全场景四摄</p>
                    <div className={'price'}>
                        <i className={'iconfont icon-jiage'}/>
                        <span>1399 </span>
                        起
                    </div>
                </div>
                <div className={'tobut-btn'}>
                    立即购买
                </div>
            </li>
        );
    }
}

export default Index;