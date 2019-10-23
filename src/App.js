import React, {Component} from 'react';
import Header from "./component/01-header";
import Banner from "./component/02-banner";
import Cells from "./component/03-cells";
import Recommendation from "./component/04-recommendation";



class App extends Component {
    render() {
        return (
            <div className={'App'}>
                <Header/>
                <Banner/>
                <Cells/>
                <Recommendation/>
            </div>
        )
    }
}

export default App;
