import React, {Component} from 'react';
import Header from "./component/01-header";
import Banner from "./component/02-banner";
import Cells from "./component/03-cells";
import Recommendation from "./component/04-recommendation";
import NewProduct from "./component/05-newProduct";
import DailySelection from "./component/06-dailySelection";
import ProductList from "./component/07-productList";
import More from "./component/08-more";
import Footer from "./component/09-footer";

import BuyPage from "./component/10-buyPage";

import {
    BrowseRoute as route,
    NavLink,

} from "react-router";

import DatePicker from 'antd-mobile/lib/date-picker';  // 加载 JS
import 'antd-mobile/lib/date-picker/style/css';        // 加载 CSS
// import 'antd-mobile/lib/date-picker/style';         // 加载 LESS


class App extends Component {
    render() {
        return (
            <div className={'App'}>
                {/*<Header/>*/}
                {/*<Banner/>*/}
                {/*<Cells/>*/}
                {/*<div className={'divider'} />*/}
                {/*<Recommendation/>*/}
                {/*<div className={'divider'} />*/}
                {/*<NewProduct />*/}
                {/*<div className={'divider'} />*/}
                {/*<DailySelection />*/}
                {/*<ProductList />*/}
                {/*<More/>*/}
                {/*<div className={'divider'} />*/}
                {/*<Footer/>*/}
                <BuyPage/>
            </div>
        )
    }
}

export default App;
