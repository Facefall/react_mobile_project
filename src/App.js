import React, {Component} from 'react';
import Header from "./component/header";
import Banner from "./component/banner";

class App extends Component {
    render() {
        return (
            <div className={'App'}>
                <Header/>
                <Banner/>
            </div>
        )
    }
}

export default App;
