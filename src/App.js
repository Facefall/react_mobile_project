import React, {Component} from 'react';
import Header from "./component/header";
import Banner from "./component/banner";
import Cells from "./component/cells";


class App extends Component {
    render() {
        return (
            <div className={'App'}>
                <Header/>
                <Banner/>
                <Cells/>

            </div>
        )
    }
}

export default App;
