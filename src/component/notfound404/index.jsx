import React, {Component} from 'react';
import "./index.scss";

class Index extends Component {
    render() {
        return (
            <div className={'notfound'}>
                <img src={require('./img/404.jpg')} alt=""/>
            </div>
        );
    }
}

export default Index;