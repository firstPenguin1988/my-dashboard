import React from 'react';
import Sidebar from "./Sidebar.js";
import Child from "./Child.js";
import './style/SubContainer.css';

class SubContainer extends React.Component {
    render() {
        return(
            <div className='sub-container'>
                <Sidebar></Sidebar>
                <Child></Child>
            </div>
        );
    }
}

export default SubContainer;