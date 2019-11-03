import React, {Component} from 'react';
import Main from "./component/12-mainPage";
import Category from "./component/10-category";
import ShopCart from "./component/11-shopCartPage";
import MyPage from "./component/13-myPage";
import NotFound from "./component/notfound404";

import {
    HashRouter as Router,
    Switch,
    Route
} from "react-router-dom";


class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path={'/'} component={Main}/>
                    <Route path={'/category'} component={Category}/>
                    <Route path={'/shopCart'} component={ShopCart}/>
                    <Route path={'/myPage'} component={MyPage}/>
                    <Route component={NotFound}/>
                </Switch>
            </Router>
        )
    }
}

export default App;
