import React, {Component} from 'react';
import "./index.scss";
import GuessLike from "./guessLike";
import ProductList from "../../07-productList";



class Index extends Component {
    state={
        List:[]
    };

    render() {
        return (
            <div className={'Cart-list'}>
                {
                    this.state.List.length === 0 && (
                        <div className={'Cart-empty'}>
                            <img src={require('../img/cartempty.png')} alt="cart"/>
                            <span>购物车还是空的</span>
                            <em>去逛逛</em>
                        </div>
                    )
                }

                <GuessLike/>
                <ProductList/>


            </div>
        );
    }
}

export default Index;