import React, {Component} from 'react';
import './style/Content1.css';
import Mastercard from "./img/mastercard2.jpg";

class Content1 extends Component {
    render() {
        return (
            <div className="content1">
                <h2>Dashboard</h2>
                <br />
                <img src={Mastercard} alt="dash" id="dash" />
            </div>
        );
    }
}

export default Content1;
