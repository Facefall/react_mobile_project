import React, {Component} from 'react';
import Footer from "../09-footer";
import BackHeader from "../011-backHeader";
import CartList from "./CartList";




class Index extends Component {
    render() {
        return (
            <div>
                <div className="Cart">
                    <BackHeader/>
                    <CartList/>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Index;