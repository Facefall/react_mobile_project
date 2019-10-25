import React, {Component} from 'react';
import Header from "./component/01-header";
import Banner from "./component/02-banner";
import Cells from "./component/03-cells";
import Recommendation from "./component/04-recommendation";
import NewProduct from "./component/05-newProduct";
import DailySelection from "./component/06-dailySelection";
import ProductList from "./component/07-productList";






class App extends Component {
    render() {
        return (
            <div className={'App'}>
                <Header/>
                <Banner/>
                <Cells/>
                <div className={'divider'} />
                <Recommendation/>
                <div className={'divider'} />
                <NewProduct />
                <div className={'divider'} />
                <DailySelection />
                <ProductList />
            </div>
        )
    }
}

export default App;
