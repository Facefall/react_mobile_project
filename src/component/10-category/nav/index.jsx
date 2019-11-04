import React, {Component} from 'react';
import "./index.scss";
import {
    NavLink
} from 'react-router-dom'

class Index extends Component {

    render() {
        const data = this.props.list.list_unit;
        return (
            <div className={'category-nav'}>
                <ul>
                    {
                        data.length > 0 && (
                            data.map((item, index) => {
                                return (
                                    <li key={index} >
                                        <NavLink exact strict to={`${item.list_id}`} >{item.list_title}</NavLink>
                                    </li>
                                )
                            })
                        )
                    }
                </ul>
            </div>
        );
    }
}

export default Index;