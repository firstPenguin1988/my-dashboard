import React, {Component} from 'react';
import './style/Aside.css';
import Download from "./img/download.png";
import Graph from "./img/graph1.png";
import MonthlyChart from "./MonthlyChart";

class Aside extends Component {
    render() {
        return (
            <div className="aside">

                <div className="top">
                    <div className="first">
                        <div className="first-left">
                            <h3 style={{color: '#b1b1b1'}}>Saved this month</h3>
                        </div>
                        <div className="first-right">
                            <a href="#"><i className="fa fa-ellipsis-v" aria-hidden="true" /></a>
                        </div>								
                    </div>

                    <div className="second">
                        <h3><strong>$25,999.00</strong></h3>
                    </div>

                    <div className="third">
                        <div className="day">
                            <h4 style={{color: '#b1b1b1'}}>Day</h4>
                        </div>
                        <div className="week">
                            <h4 style={{color: '#b1b1b1'}}>Week</h4>
                        </div>
                        <div className="month">
                            <h4><strong>Month</strong></h4>
                        </div>
                        <div className="year">
                            <h4 style={{color: '#b1b1b1'}}>Year</h4>
                        </div>								
                    </div>
                </div>

                <div className="middle">
                    {/* <img src={Graph} alt="admin" id="avatar" /> */}
                    <MonthlyChart />                    
                </div>

                <div className="fifth">
                    <div className="months">
                        <div className="may">
                            <h4 style={{color: '#b1b1b1'}}>May</h4>
                        </div>
                        <div className="june">
                            <h4 style={{color: '#b1b1b1'}}>June</h4>
                        </div>
                        <div className="july">
                            <h4 style={{color: '#b1b1b1'}}>July</h4>
                        </div>
                        <div className="aug">
                            <h4 style={{color: '#b1b1b1'}}>Aug</h4>
                        </div>
                        <div className="sep">
                            <h4 style={{color: '#b1b1b1'}}>Sep</h4>
                        </div>
                        <div className="oct">
                            <h4><strong>Oct</strong></h4>
                        </div>
                        <div className="nov">
                            <h4 style={{color: '#b1b1b1'}}>Nov</h4>
                        </div>
                    </div>

                    <div className="six-main">
                        <div className="sixth">
                            <div className="six-plan">
                                <h5 style={{color: '#b1b1b1'}}>Plan for 2020</h5>
                                <h4 style={{color: 'white'}}><strong>Completed</strong></h4>
                            </div>
                            <div className="six-percent">
                                <img src={Download} alt="admin" id="avatar" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Aside;