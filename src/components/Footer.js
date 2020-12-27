import React, {Component} from 'react';
import './style/Footer.css';
import Car from './img/car.png';
import Grocery from './img/grocery.png';
import Gym from './img/gym.png';
import Laundry from './img/laundry.png';
import Shopping from './img/shopping.png';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="foot1">
                    <div className="foot1left">
                        <h3><strong>Recent Transactions</strong></h3>
                    </div>
                    <div className="foot1right">
                        <div className="f1rchild">
                            <ul>
                                <li><a href="#">Sort By<i className="fa fa-sort-alpha-asc" aria-hidden="true" /></a>
                                    <ul>
                                        <li><a href="#">Date</a></li>
                                        <li><a href="#">Price</a></li>
                                        <li><a href="#">Alphabet</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="foot2">
                    <div className="f2child">
                        <table>
                            <tbody>
                                <tr>
                                    <td><img src={Car} alt="admin" id="avatar" /></td>
                                    <td>Car Repair</td>
                                    <td style={{color: '#b1b1b1'}}>05 June 2020  10:00</td>
                                    <td>$ 1000</td>
                                    <td><i className="fa fa-ellipsis-v" aria-hidden="true" /></td>
                                </tr>
                                <tr>
                                    <td><img src={Grocery} alt="admin" id="avatar" /></td>
                                    <td>Grocery</td>
                                    <td style={{color: '#b1b1b1'}}>12 June 2020  10:00</td>
                                    <td>$ 75</td>
                                    <td><i className="fa fa-ellipsis-v" aria-hidden="true" /></td>  
                                </tr>
                                <tr>
                                    <td><img src={Gym} alt="admin" id="avatar" /></td>
                                    <td>Gym</td>
                                    <td style={{color: '#b1b1b1'}}>23 June 2020  12:00</td>
                                    <td>$ 125</td>
                                    <td><i className="fa fa-ellipsis-v" aria-hidden="true" /></td>  
                                </tr>
                                <tr>
                                    <td><img src={Laundry} alt="admin" id="avatar" /></td>
                                    <td>Laundry</td>
                                    <td style={{color: '#b1b1b1'}}>27 June 2020  09:35</td>
                                    <td>$ 90</td>
                                    <td><i className="fa fa-ellipsis-v" aria-hidden="true" /></td>
                                </tr>
                                <tr>
                                    <td><img src={Shopping} alt="admin" id="avatar" /></td>
                                    <td>Shopping</td>
                                    <td style={{color: '#b1b1b1'}}>28 June 2020  10:20</td>
                                    <td>$ 300</td>
                                    <td><i className="fa fa-ellipsis-v" aria-hidden="true" /></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>						
            </div>
        );
    }
}

export default Footer;