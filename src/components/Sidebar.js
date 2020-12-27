import React, {Component} from 'react';
import './style/Sidebar.css';

class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar">
                <a href="index.html"><i className="fa fa-home" aria-hidden="true" /><span /></a>
                <a href="https://www.gmail.com/"><i className="fa fa-envelope" aria-hidden="true" /><span /></a>
                <a href="comment.html"><i className="fa fa-comment" aria-hidden="true" /><span /></a>
                <a href="#"><i className="fa fa-user" aria-hidden="true" /><span /></a>
                <a href="#"><i className="fa fa-upload" aria-hidden="true" /><span /></a>
                <a href="#"><i className="fa fa-cog" aria-hidden="true" /><span /></a>
            </div>
        );
    }
}

export default Sidebar;