import React, {Component} from 'react';
import "./products.scss";
import ListItem from "./item";


class Index extends Component {
    state = {
      img:["k20.webp","k20pro.jpg","mi9.jpg","note8.jpg","redmi8pro.jpg","k20.webp"]
    };

    render() {
        return (
            <ul className={'ProductList'}>
                {
                    this.state.img.map((item,index) => {
                        return <ListItem key={index} img={item}/>
                    })
                }
            </ul>
        );
    }
}

export default Index;