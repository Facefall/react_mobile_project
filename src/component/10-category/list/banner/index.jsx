import React, {Component} from 'react';
// import "./banner.scss";


class Index extends Component {

    render() {
        // const banner_path = this.props.banner;
        return (
            <div className={'category-banner'} >
                <img src={require(`../../img/1banner.jpg`)} alt=""/>
            </div>
        );
    }
}

export default Index;