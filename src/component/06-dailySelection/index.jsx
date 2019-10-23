import React, {Component} from 'react';
import './dailySelection.scss';

class Index extends Component {
    render() {
        return (
            <div className={'dailySelection'} >
                <img src={require('../../img/daily.jpg')} alt=""/>
            </div>
        );
    }
}

export default Index;