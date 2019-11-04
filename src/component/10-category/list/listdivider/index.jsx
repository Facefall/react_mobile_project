import React, {Component} from 'react';

class Index extends Component {
    state = {
        subtitle:"手机"
    };

    render() {
        return (
            <div className={'list-divider'} >
                <span>
                    {this.state.subtitle}
                </span>
            </div>
        );
    }
}

export default Index;