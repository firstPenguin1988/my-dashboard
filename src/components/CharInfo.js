import React, {Component} from 'react';
import Avatar from "./img/avatar.jpg";

class CharInfo extends Component{
    constructor(props){
        super(props);

        this.state = {
            expanded: false,
        }
    }

    open = () => {
        this.setState({expanded: !this.state.expanded})
    }

    close = () => {
        this.setState({expanded: !this.state.expanded})
    }

    render() {
        //const info = this.props;
        console.log("hjjhg" + JSON.stringify(this.props.people));
        if(!this.state.expanded){
            return <img src={Avatar} alt="admin" id="avatar" onClick={this.open} />
        }
        return(
            <div className="user-details">
                <img src={Avatar} alt="admin" id="avatar" onClick={this.close} />
                <ul>
                    <li><h6>Name: {this.props.people.name}</h6></li>
                    <li><h6>Gender: {this.props.people.gender}</h6></li>
                    <li><h6>Birth date: {this.props.people.birth_year}</h6></li>
                </ul>
            </div>
        )
    }
}

export default CharInfo;
