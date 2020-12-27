import React, {Component} from 'react';
import './style/Content2.css';

class Content2 extends Component {
    render() {
        return (
            <div className="content2">
                <div className="text1">
                    <h2><strong>Upcoming payments</strong></h2>
                </div>
                <div className="payment">
                    <div className="payment1">
                        <a href="#"><i className="fa fa-briefcase" aria-hidden="true" /></a>
                        <h3><strong>Salary</strong></h3>
                        <h4 style={{color: '#b1b1b1'}}>Belong Interactive</h4>
                        <h3><strong>+$2000</strong></h3>
                    </div>
                    <div className="payment2">
                        <a href="#"><i className="fa fa-paypal" aria-hidden="true" /></a>
                        <h3><strong>Salary</strong></h3>
                        <h4 style={{color: '#b1b1b1'}}>Freelance payment</h4>
                        <h3><strong>+$75:00</strong></h3>
                    </div>
                </div>
            </div>
        );
    }
}

export default Content2;
