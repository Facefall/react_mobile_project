import React, {Component} from 'react';
import Footer from "../09-footer";
import BackHeader from "../011-backHeader";



class Index extends Component {
    render() {
        return (
            <div>
                <div className="Cart">
                    <BackHeader/>
                    <div className="item-nav">
                        {/*<ul>*/}
                            {/*<li>*/}
                                {/*<p>新品</p>*/}
                            {/*</li>*/}
                            {/*<li>*/}
                                {/*<p>众筹</p>*/}
                            {/*</li>*/}
                            {/*<li>*/}
                                {/*<p>小米手机</p>*/}
                            {/*</li>*/}
                            {/*<li>*/}
                                {/*<p>Redmi手机</p>*/}
                            {/*</li>*/}
                        {/*</ul>*/}
                    </div>
                    <div className="item-list">

                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Index;