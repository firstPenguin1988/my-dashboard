import React from 'react';
import Main from "./Main.js";
import Footer from "./Footer.js";
import './style/Child.css';

class Child extends React.Component {
    render() {
        return (
            <div className="child">
              <Main></Main>
              <Footer></Footer>
            </div>
        );
    }
}   

export default Child;
