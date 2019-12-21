import React from 'react'

class QuizzNavBar extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            userName : 'Some Name',
        }
    }

    render(){
        return(
            <div>
                <ul>
                    <li>{this.state.userName}</li>
                    <li><h1>Welcome to QuizzApp</h1></li>
                    <li>*Timer Code</li>
                </ul>
            </div>
        )
    }
}

class PassQuizz extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return(
            <div>
                <QuizzNavBar />
            </div>
        )
    }
}

export default PassQuizz