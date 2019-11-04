import React, {Component} from 'react';

class Index extends Component {
    state = {
        list: {
            list_unit: [
                {
                    list_id: 1,
                    list_title: "新品",
                    img: ["1phone.png", "2phone.gif", "3phone.png", "4phone.png", "5phone.png", "6phone.png", "7phone.gif", "8phone.png", "9phone.gif", "10phone.png", '11phone.png'],
                    banner_img: "1banner.jpg"
                },
                {
                    list_id: 2,
                    list_title: "众筹",
                    img_name: ["1item.jpg", "2item.jpg", "3item.png", "4item.png", "5item.png", "6item.png", "7item.jpg", "8item.jpg", "9item.jpg", "10item.jpg", "11item.jpg", "12item.png"],
                    banner_img: "2banner.png"

                },
                {
                    list_id: 3,
                    list_title: "小米手机",
                    img: ["1phone.png", "2phone.gif", "3phone.png", "4phone.png", "5phone.png", "6phone.png", "7phone.gif", "8phone.png", "9phone.gif", "10phone.png", '11phone.png'],
                    banner_img: "3banner.jpg"
                },
            ],
        }
    };

    render() {
        return (
            <div className={'subList'} >
                <ul>
                    {
                        this.state.list.list_unit.length > 0 && this.state.list.list_unit.map((item,index) => {
                            return (
                                <li key={index}>
                                    <img src={require(`../../img/1phone.png`)} alt=""/>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default Index;