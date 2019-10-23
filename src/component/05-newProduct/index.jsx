import React, {Component} from 'react';
import "./newProduct.scss";
class Index extends Component {
    render() {
        return (
            <div className={'newProduct'}>
                <img src={require('../../img/new-product.jpg')} alt=""/>
            </div>
        );
    }
}

export default Index;