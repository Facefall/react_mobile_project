import React, {Component} from 'react';
import "./index.scss";

class Index extends Component {
    render() {
        return (
            <div className={'notfound'}>

                <img src={require('./img/404.jpg')} alt=""/>
                <p className="sorry">
                    咦~页面不见了~
                </p>
                <p className="back">
                    <a href="http://mi.com">返回首页 mi.com</a>
                </p>
            </div>
        );
    }
}

export default Index;