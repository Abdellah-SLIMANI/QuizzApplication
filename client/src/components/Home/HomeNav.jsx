import React, { Component } from 'react'
import "./Home.css"

class HomeNavBar extends Component{
    constructor(props){
        super(props);
        this.state = {
            username : 'Abdellah Slimani'
        }
    }

    render(){
        return(
            <div className="Navbar">
                <ul>
                    <li><h3>{this.state.username}</h3></li>
                    <li><h1>Welcome to QuizzApp</h1></li>
                    <li><h3>Logout</h3></li>
                </ul>
            </div>
        )
    }
}

export default HomeNavBar