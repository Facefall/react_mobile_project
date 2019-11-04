import React from "react";
import BackHeader from "../011-backHeader";
import Footer from "../09-footer";
import Nav from "./nav";
import ListDivider from "./list/listdivider";
// import SubList from "./list/sublist";
import "./index.scss";
import ListBanner from "./list/banner";



class Index extends React.Component {
    state = {
        list: {
            list_unit: [
                {
                    list_id: 1,
                    list_title: "新品",
                    img: ["1phone.png", "2phone.gif","5phone.png", "6phone.png", "7phone.gif", "8phone.png", ],
            banner_img: "1banner.jpg"
                },
                {
                    list_id: 2,
                    list_title: "众筹",
                    img: ["1item.jpg", "2item.jpg", "3item.png", "4item.png", "5item.png", "6item.png", "7item.jpg", "8item.jpg", "9item.jpg", "10item.jpg", "11item.jpg", "12item.png"],
                    banner_img: "2banner.png"

                },
                {
                    list_id: 3,
                    list_title: "小米手机",
                    img: [ "3phone.png", "4phone.png", "5phone.png", "6phone.png", "7phone.gif", "8phone.png", "9phone.gif", "10phone.png", '11phone.png'],
                    banner_img: "3banner.jpg"
                },
            ],
        }
    };

    render() {
        return (
            <div>
                <BackHeader subtitle={'分类'} />
                <Nav  {...this.state}/>

                <div className={'category-content'} >
                    {
                        this.state.list.list_unit.length > 0 && this.state.list.list_unit.map((item1,index) => {
                            // console.log(item1);
                            return (
                                <div key={index} >
                                    <ListBanner />
                                    <ListDivider />
                                    {

                                        <div className={'subList'} >
                                            <ul>
                                                {

                                                    item1.img.map((item,index) => {
                                                        return (
                                                            <li key={index}>
                                                                <img src={require(`./img/${item}`)} alt=""/>
                                                                <p>{'Redmi 8'}</p>
                                                            </li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        </div>
                                    }
                                </div>
                                )
                        })
                    }
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Index;