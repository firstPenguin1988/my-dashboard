import React, {Component} from 'react';
import './style/Header.css';
import CharInfo from './CharInfo';
import axios from 'axios';

class Header extends Component {

	constructor(props){
		super(props);
	
		this.state = {
		  people: [],
		}
	  }
	
	getPeople = () => {
		return axios.get("https://swapi.dev/api/people/1/")
		.then((response) => {
		  console.log("gfhf" + response.data);
		  this.setState( { people: response.data } )
		})
	}
	
	componentDidMount(){
		this.getPeople()
	}
	
    render() {
		const {people} = this.state;

        return (
            <div className="header">
			    <div className="left">
				    <input type="text" placeholder="Search.." />
			    </div>
	
			    <div className="right">
				    <select data-placeholder="Language...">
					    <option value="EN">EN</option>
					    <option value="FR">FR</option>
					    <option value="DE">DE</option>
					    <option value="ES">ES</option>
					    <option value="PT">PT</option>
					    <option value="HI">HI</option>
				    </select>
				    <a href="#notify"><i className="fa fa-bell-o" aria-hidden="true"></i></a>

                	<CharInfo people = {people} />


			    </div>
            </div>
        );
    }
}

export default Header;