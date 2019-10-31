import React, {Component} from 'react';
import Header from "../01-header/index";
import Banner from "../02-banner/index";
import Cells from "../03-cells/index";
import Recommendation from "../04-recommendation/index";
import NewProduct from "../05-newProduct/index";
import DailySelection from "../06-dailySelection/index";
import ProductList from "../07-productList/index";
import More from "../08-more/index";
import Footer from "../09-footer/index";

class Index extends Component {
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
                <More/>
                <div className={'divider'} />
                <Footer/>
                {/*<BuyPage/>*/}
            </div>
        );
    }
}

export default Index;