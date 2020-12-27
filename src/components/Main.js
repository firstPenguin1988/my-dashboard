import React from 'react';
import Content1 from "./Content1.js";
import Content2 from "./Content2.js";
import Aside from "./Aside.js";
import './style/Main.css';

class Main extends React.Component {
    render() {
        return (
            <div className="main">
                <Content1></Content1>
                <Content2></Content2>
                <Aside></Aside>
            </div>
        );
    }
}   

export default Main;