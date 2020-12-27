import React from 'react';
import Header from "./Header.js";
import SubContainer from "./SubContainer.js";
import './style/Container.css'; 

class Container extends React.Component {
    render() {
        return(
            <div className='container'>
                <Header></Header>
                <SubContainer></SubContainer>
            </div>
        );
    }
}

export default Container;