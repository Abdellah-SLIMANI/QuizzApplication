import React from 'react'
import './PassQuizz.css'

class PassQuizzNav extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            Username: "Abdellah Slimani"
        }
    }

    render(){
        return(
            <nav>
                <ul>
                    <li>{this.state.Username}</li>
                    <li><h1>Welcome to QuizzApp</h1></li>
                    <li><h2>Logout</h2></li>
                </ul>
            </nav>
        )
    }
}

export default PassQuizzNav